import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FlightService } from '../flight.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FlightFormComponent implements OnChanges {
  @Input() selectedFlight: any = null;

  // ✅ Include `id` to fix undefined issue
  flight = {
    id: null,
    flightNumber: '',
    destination: '',
    origin: '',
    departureTime: ''
  };

  isEditMode = false;

  constructor(private flightService: FlightService) {}

  // ✅ Detect when a flight is selected for editing
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedFlight'] && this.selectedFlight) {
      this.flight = { ...this.selectedFlight }; // clone the selected flight
      this.isEditMode = true;
    }
  }

  // ✅ Handle Add and Update
  onSubmit() {
    if (this.isEditMode && this.flight.id !== null) {
      this.flightService.updateFlight(this.flight.id, this.flight)
        .then(() => {
          console.log("Flight updated");
          window.location.reload();
        })
        .catch(error => console.error("Error updating flight", error));
    } else {
      this.flightService.addFlight(this.flight)
        .then(() => {
          console.log("Flight added");
          // Reset the form
          this.flight = {
            id: null,
            flightNumber: '',
            destination: '',
            origin: '',
            departureTime: ''
          };
          window.location.reload();
        })
        .catch(error => console.error("Error adding flight", error));
    }
  }
}
