package com.rrairways.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.persistence.EntityNotFoundException;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	  @ExceptionHandler(EntityNotFoundException.class)
	    public ResponseEntity<String> handleNotFound(EntityNotFoundException ex) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
	    }

	    @ExceptionHandler(MethodArgumentNotValidException.class)
	    public ResponseEntity<String> handleValidation(MethodArgumentNotValidException ex) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Validation error");
	    }

	    @ExceptionHandler(Exception.class)
	    public ResponseEntity<String> handleAll(Exception ex) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                             .body("Error: " + ex.getMessage());
	    }

}
