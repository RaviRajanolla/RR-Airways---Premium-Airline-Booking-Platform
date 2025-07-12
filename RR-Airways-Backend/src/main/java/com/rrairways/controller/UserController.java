package com.rrairways.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrairways.entity.User;
import com.rrairways.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/user")
public class UserController {
	
	 @Autowired
	    private UserService userService;

	    @GetMapping("/profile")
	    public ResponseEntity<User> getProfile(Authentication auth) {
	        String username = auth.getName();
	        User user = userService.findByUsername(username);
	        return ResponseEntity.ok(user);
	    }

}
