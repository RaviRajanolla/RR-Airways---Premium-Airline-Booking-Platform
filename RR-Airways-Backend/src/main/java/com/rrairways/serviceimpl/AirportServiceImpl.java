package com.rrairways.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rrairways.entity.Airport;
import com.rrairways.repository.AirportRepository;
import com.rrairways.service.AirportService;
@Service
public class AirportServiceImpl implements AirportService{
	
	 @Autowired
	    private AirportRepository airportRepository;

	@Override
	public List<Airport> getAllAirports() {
		
		return airportRepository.findAll();
	}

	@Override
	public Airport saveAirport(Airport airport) {
	
		return airportRepository.save(airport);
	}

}
