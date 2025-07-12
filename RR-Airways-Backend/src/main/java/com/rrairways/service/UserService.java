package com.rrairways.service;

import java.util.List;

import com.rrairways.entity.User;

public interface UserService {
	
	User findByUsername(String username);
    long countUsers();
    List<User> getAllUsers();
    void deleteUser(Long id);

}
