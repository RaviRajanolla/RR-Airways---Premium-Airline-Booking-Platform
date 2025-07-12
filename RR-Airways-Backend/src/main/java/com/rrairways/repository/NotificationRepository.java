package com.rrairways.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rrairways.entity.Notification;
@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long>  {
	
	List<Notification> findByUsername(String username);
	
    // Optional: Get unread notifications
    List<Notification> findByUsernameAndReadFalse(String username);


}
