import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'http://localhost:8081/api/flights'; // Backend API URL

  constructor() {}

  // Get all flights
  getFlights() {
    return axios.get(this.apiUrl);
  }

  // Add a new flight
  addFlight(flight: any) {
    return axios.post(this.apiUrl, flight);
  }

  // 🔁 Update an existing flight
  updateFlight(id: number, flight: any) {
    return axios.put(`${this.apiUrl}/${id}`, flight);
  }

  // ❌ Delete a flight
  deleteFlight(id: number) {
    return axios.delete(`${this.apiUrl}/${id}`);
  }
}
