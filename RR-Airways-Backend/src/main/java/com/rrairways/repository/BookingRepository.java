package com.rrairways.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rrairways.entity.Booking;
@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
	
	 List<Booking> findByUserUsername(String username);
	 
	 // Optional: Fetch bookings by flight ID if needed
	    List<Booking> findByFlightId(Long flightId);
}
