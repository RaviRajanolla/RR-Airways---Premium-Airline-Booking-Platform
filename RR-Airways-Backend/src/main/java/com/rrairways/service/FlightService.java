package com.rrairways.service;

import java.util.List;

import com.rrairways.dto.FlightSearchRequest;
import com.rrairways.entity.Flight;

public interface FlightService {
	
	 List<Flight> searchFlights(FlightSearchRequest request);
	    Flight saveFlight(Flight flight);
	    long countFlights();

}
