package com.example.airlinemanagementsystem.service;

import com.example.airlinemanagementsystem.model.Flight;
import com.example.airlinemanagementsystem.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    public Flight addFlight(Flight flight) {
        return flightRepository.save(flight);
    }

    public Flight getFlightById(Long id) {
        return flightRepository.findById(id).orElse(null);
    }

    public Flight updateFlight(Long id, Flight flightDetails) {
        Flight flight = flightRepository.findById(id).orElse(null);
        if (flight != null) {
            flight.setFlightNumber(flightDetails.getFlightNumber());
            flight.setDestination(flightDetails.getDestination());
            flight.setOrigin(flightDetails.getOrigin());
            flight.setDepartureTime(flightDetails.getDepartureTime());
            return flightRepository.save(flight);
        }
        return null;
    }

    public void deleteFlight(Long id) {
        flightRepository.deleteById(id);
    }
}
