package com.rrairways.service;

import java.util.List;

import com.rrairways.entity.Notification;

public interface NotificationService {
	
	 List<Notification> getByUsername(String username);

}
