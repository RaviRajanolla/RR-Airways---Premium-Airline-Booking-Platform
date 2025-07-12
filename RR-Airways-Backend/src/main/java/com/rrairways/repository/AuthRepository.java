package com.rrairways.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.rrairways.entity.User;
@Repository
public interface AuthRepository {
	
	User findUserByCredentials(String username, String password);
	Optional<User> findByUsername(String username);

    boolean existsByUsername(String username);

}
