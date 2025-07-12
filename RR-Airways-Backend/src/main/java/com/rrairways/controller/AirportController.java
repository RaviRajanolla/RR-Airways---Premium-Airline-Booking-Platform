package com.rrairways.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrairways.entity.Airport;
import com.rrairways.service.AirportService;

@RestController
@RequestMapping("/api/airports")
public class AirportController {
	
	   @Autowired
	    private AirportService airportService;

	    @GetMapping
	    public List<Airport> getAllAirports() {
	        return airportService.getAllAirports();
	    }

	    @PostMapping
	    @PreAuthorize("hasRole('ADMIN') or hasRole('SUPER_ADMIN')")
	    public Airport addAirport(@RequestBody Airport airport) {
	        return airportService.saveAirport(airport);
	    }

}
