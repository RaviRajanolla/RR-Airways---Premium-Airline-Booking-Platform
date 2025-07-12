package com.rrairways.service;

import com.rrairways.dto.JwtResponse;
import com.rrairways.dto.LoginRequest;
import com.rrairways.dto.RegisterRequest;
import com.rrairways.entity.User;

public interface AuthService {
	JwtResponse login(LoginRequest request);
    User register(RegisterRequest request);

}
