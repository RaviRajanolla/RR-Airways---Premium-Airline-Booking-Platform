package com.rrairways.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rrairways.entity.User;
import com.rrairways.repository.UserRepository;
import com.rrairways.service.UserService;
@Service

public class UserServiceImpl implements UserService{
	
	 @Autowired
	    private UserRepository userRepository;

	@Override
	public User findByUsername(String username) {
		return  userRepository.findByUsername(username)
	            .orElseThrow(() -> new RuntimeException("User not found"));
	}

	@Override
	public long countUsers() {
		return  userRepository.count();
	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public void deleteUser(Long id) {
		userRepository.findAll();
		
	}

}
