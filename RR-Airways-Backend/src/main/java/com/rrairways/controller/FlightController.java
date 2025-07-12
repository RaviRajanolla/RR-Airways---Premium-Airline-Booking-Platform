package com.rrairways.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrairways.dto.FlightSearchRequest;
import com.rrairways.entity.Flight;
import com.rrairways.service.FlightService;

@RestController
@RequestMapping("/api/flights")
public class FlightController {
	
	   @Autowired
	    private FlightService flightService;

	    // Search flights (all users)
	    @PostMapping("/search")
	    public List<Flight> searchFlights(@RequestBody FlightSearchRequest req) {
	        return flightService.searchFlights(req);
	    }

	    // Admin can add flights
	    @PreAuthorize("hasRole('ADMIN') or hasRole('SUPER_ADMIN')")
	    @PostMapping
	    public Flight addFlight(@RequestBody Flight flight) {
	        return flightService.saveFlight(flight);
	    }

}
