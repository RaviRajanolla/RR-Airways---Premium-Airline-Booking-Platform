package com.rrairways.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrairways.entity.Notification;
import com.rrairways.service.NotificationService;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {
	
    @Autowired
    private NotificationService notificationService;

    @GetMapping
    public List<Notification> getMyNotifications(Authentication auth) {
        String username = auth.getName();
        return notificationService.getByUsername(username);
    }

}
