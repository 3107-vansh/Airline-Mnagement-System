import { Component } from '@angular/core';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, FlightFormComponent, FlightListComponent]
})
export class AppComponent {
  title = 'airline-frontend';

  // ✅ Add this property to receive edit flight data
  selectedFlight: any = null;

  // ✅ This will be triggered from <app-flight-list>
  handleEditFlight(flight: any) {
    this.selectedFlight = flight;
  }
}
