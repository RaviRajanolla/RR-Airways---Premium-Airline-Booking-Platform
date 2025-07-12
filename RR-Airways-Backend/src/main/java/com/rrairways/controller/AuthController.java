package com.rrairways.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrairways.dto.JwtResponse;
import com.rrairways.dto.LoginRequest;
import com.rrairways.dto.RegisterRequest;
import com.rrairways.entity.User;
import com.rrairways.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	   @Autowired
	    private AuthService authService;

	    @PostMapping("/login")
	    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest request) {
	        JwtResponse jwt = authService.login(request);
	        return ResponseEntity.ok(jwt);
	    }

	    @PostMapping("/register")
	    public ResponseEntity<User> register(@RequestBody RegisterRequest request) {
	        User newUser = authService.register(request);
	        return ResponseEntity.ok(newUser);
	    }

}
