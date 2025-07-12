package com.rrairways.service;

import java.util.List;

import com.rrairways.dto.BookingRequest;
import com.rrairways.entity.Booking;

public interface BookingService {
	
	   Booking bookFlight(BookingRequest request, String username);
	    List<Booking> getBookingsByUser(String username);
	    long countBookings();

}
