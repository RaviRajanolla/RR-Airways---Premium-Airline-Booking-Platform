package com.rrairways.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rrairways.dto.BookingRequest;
import com.rrairways.entity.Booking;
import com.rrairways.entity.Flight;
import com.rrairways.entity.User;
import com.rrairways.repository.BookingRepository;
import com.rrairways.repository.FlightRepository;
import com.rrairways.repository.UserRepository;
import com.rrairways.service.BookingService;


@Service

public class BookingServiceImpl implements BookingService {
	
	 @Autowired
	    private BookingRepository bookingRepository;

	    @Autowired
	    private FlightRepository flightRepository;

	    @Autowired
	    private UserRepository userRepository;

		@Override
		public Booking bookFlight(BookingRequest request, String username) {
			
			// Fetch user by username
			 User user = userRepository.findByUsername(username)
		                .orElseThrow(() -> new RuntimeException("User not found"));
		        
		        // Fetch flight by ID from request
		        Flight flight = flightRepository.findById(request.getFlightId())
		                .orElseThrow(() -> new RuntimeException("Flight not found"));
	        
	     // Create booking entity
	        Booking booking = new Booking();
	        booking.setUser(user);
	        booking.setFlight(flight);
	        booking.setSeats(request.getSeats());
	        
			return bookingRepository.save(booking);
		}

		@Override
		public List<Booking> getBookingsByUser(String username) {
			return bookingRepository.findByUserUsername(username);
		}

		@Override
		public long countBookings() {
			return bookingRepository.count();
		}

	
	
		

}
