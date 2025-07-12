package com.rrairways.dto;

import java.util.List;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Data
@Setter @Getter
public class BookingRequest {
	
	public BookingRequest(Long flightId, int seats) {
		super();
		this.flightId = flightId;
		this.seats = seats;
	
	}
	private Long flightId;
	private int seats;
	 // Getters and Setters
    public Long getFlightId() {
        return flightId;
    }
    public void setFlightId(Long flightId) {
        this.flightId = flightId;
    }
    public int getSeats() {
        return seats;
    }
    public void setSeats(int seats) {
        this.seats = seats;
    }

}
