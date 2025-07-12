package com.rrairways.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rrairways.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	Optional<User> findByUsername(String username);
	
	// Check if a username already exists (used in register)
    boolean existsByUsername(String username);

    // Optional: Find user by email (if applicable)
    Optional<User> findByEmail(String email);

}
