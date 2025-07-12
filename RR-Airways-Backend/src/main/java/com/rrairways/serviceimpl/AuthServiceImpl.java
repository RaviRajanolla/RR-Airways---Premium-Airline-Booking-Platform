package com.rrairways.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.rrairways.dto.JwtResponse;
import com.rrairways.dto.LoginRequest;
import com.rrairways.dto.RegisterRequest;
import com.rrairways.dto.Role;
import com.rrairways.entity.User;
import com.rrairways.repository.UserRepository;
import com.rrairways.service.AuthService;
import com.rrairways.util.JwtTokenProvider;

import io.jsonwebtoken.lang.Collections;
@Service
public class AuthServiceImpl implements AuthService{
	
	 @Autowired
	    private UserRepository userRepository;

	    @Autowired
	    private PasswordEncoder passwordEncoder;

	    @Autowired
	    private JwtTokenProvider jwtTokenProvider;

		@Override
		public JwtResponse login(LoginRequest request) {
			 User user = userRepository.findByUsername(request.getUsername())
			            .orElseThrow(() -> new RuntimeException("Invalid username or password"));

			        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
			            throw new RuntimeException("Invalid username or password");
			        }

			        String token = jwtTokenProvider.generateToken(user.getUsername(), user.getRoles());
			      
			return  new JwtResponse();
		}

		@Override
		public User register(RegisterRequest request) {
			 if (userRepository.existsByUsername(request.getUsername())) {
		            throw new RuntimeException("Username already exists");
		        }

		        User user = new User();
		        user.setUsername(request.getUsername());
		        user.setPassword(passwordEncoder.encode(request.getPassword()));
		        user.setRoles(Collections.singleton(Role.ROLE_USER));

		        return userRepository.save(user);
		}
	
	
}
