package com.rrairways.dto;

import java.time.LocalDate;

import com.rrairways.entity.SeatClass;

import lombok.Data;
@Data
public class FlightSearchRequest {
	 private String from;
	    private String to;
	    private LocalDate departureDate;

}
