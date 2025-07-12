package com.rrairways.service;

import java.util.List;

import com.rrairways.entity.Airport;

public interface AirportService {
	
	List<Airport> getAllAirports();
    Airport saveAirport(Airport airport);

}
