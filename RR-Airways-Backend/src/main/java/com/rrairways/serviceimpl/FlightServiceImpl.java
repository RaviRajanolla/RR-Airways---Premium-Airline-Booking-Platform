package com.rrairways.serviceimpl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rrairways.dto.FlightSearchRequest;
import com.rrairways.entity.Flight;
import com.rrairways.repository.FlightRepository;
import com.rrairways.service.FlightService;
@Service

public class FlightServiceImpl implements FlightService{
	
	 @Autowired
	    private FlightRepository flightRepository;

	@Override
	public List<Flight> searchFlights(FlightSearchRequest request) {
		return  flightRepository.searchFlights(
	            request.getFrom(),
	            request.getTo(),
	            request.getDepartureDate()
				);
	}

	@Override
	public Flight saveFlight(Flight flight) {
		return flightRepository.save(flight);
	}

	@Override
	public long countFlights() {
		return flightRepository.count();
	}

	
}
