package com.rrairways.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rrairways.entity.Notification;
import com.rrairways.repository.NotificationRepository;
import com.rrairways.service.NotificationService;
@Service
public class NotificationServiceImpl implements NotificationService {
	
	 @Autowired
	    private NotificationRepository notificationRepository;

	@Override
	public List<Notification> getByUsername(String username) {
		return notificationRepository.findByUsername(username);
	}

}
