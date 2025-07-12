package com.rrairways.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrairways.dto.BookingRequest;
import com.rrairways.entity.Booking;
import com.rrairways.service.BookingService;

@RestController
@RequestMapping("/api/bookings")

public class BookingController {

	    @Autowired
	    private BookingService bookingService;

	    @PostMapping
	    public ResponseEntity<Booking> createBooking(@RequestBody BookingRequest request, Authentication authentication) {
	        String username = authentication.getName();
	        Booking booking = bookingService.bookFlight(request, username);
	        return ResponseEntity.ok(booking);
	    }
	    // Get all bookings made by the currently authenticated user
	    @GetMapping
	    public ResponseEntity<List<Booking>> getMyBookings(Authentication authentication) {
	        String username = authentication.getName();
	        List<Booking> bookings = bookingService.getBookingsByUser(username);
	        return ResponseEntity.ok(bookings);
	        
	        @GetMapping("/count")
	        public ResponseEntity<Long> getTotalBookings() {
	            long count = bookingService.countBookings();
	            return ResponseEntity.ok(count);
	    
	    }
	}



