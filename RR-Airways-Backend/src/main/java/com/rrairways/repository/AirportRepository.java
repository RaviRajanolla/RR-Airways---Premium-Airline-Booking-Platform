package com.rrairways.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rrairways.entity.Airport;
@Repository
public interface AirportRepository extends JpaRepository<Airport, Long> {
	  Airport findByCode(String code);
	    boolean existsByCode(String code);

}
