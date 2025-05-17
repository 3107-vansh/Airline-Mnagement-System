import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlightService } from '../flight.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FlightListComponent implements OnInit {
  flights: any[] = [];
  errorMessage: string | null = null;

  @Output() editSelectedFlight = new EventEmitter<any>(); // for update feature

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.fetchFlights();
  }

  fetchFlights(): void {
    this.flightService.getFlights()
      .then(response => {
        this.flights = response.data;
      })
      .catch(error => {
        this.errorMessage = "There was an error retrieving the flights!";
        console.error(this.errorMessage, error);
      });
  }

  // ✅ DELETE functionality
  deleteFlight(id: number): void {
    if (confirm("Are you sure you want to delete this flight?")) {
      this.flightService.deleteFlight(id)
        .then(() => {
          this.fetchFlights(); // refresh list after deletion
        })
        .catch(error => {
          console.error("Error deleting flight", error);
        });
    }
  }

  // ✅ EDIT functionality
  editFlight(flight: any): void {
    this.editSelectedFlight.emit(flight); // pass selected flight to parent/form
  }
}
