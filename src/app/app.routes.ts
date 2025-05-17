import { Routes } from '@angular/router';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FlightListComponent } from './flight-list/flight-list.component';

export const routes: Routes = [
  { path: 'add-flight', component: FlightFormComponent },
  { path: 'list-flights', component: FlightListComponent },
  { path: '', redirectTo: 'list-flights', pathMatch: 'full' }  // Default route
];
