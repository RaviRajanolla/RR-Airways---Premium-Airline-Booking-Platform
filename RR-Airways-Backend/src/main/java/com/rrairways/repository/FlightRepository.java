package com.rrairways.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.rrairways.entity.Flight;
@Repository

public interface FlightRepository extends JpaRepository<Flight, Long> {
	
	 // Example custom finder by airport codes and date range (for search):
	@Query("SELECT f FROM Flight f WHERE f.from = :from AND f.to = :to AND f.departureDate = :departureDate")
    List<Flight> searchFlights(String from, String to, LocalDate departureDate);
	
	 // Optional: search by price range
    List<Flight> findByFromLocationAndToLocationAndDepartureDateAndPriceLessThanEqual(
        String fromLocation,
        String toLocation,
        LocalDate departureDate,
        double maxPrice
    );

    // Optional: search by airline
    List<Flight> findByAirlineContainingIgnoreCase(String airline);

    // Optional: search by class type
    List<Flight> findByFlightClassIgnoreCase(String flightClass);

}
