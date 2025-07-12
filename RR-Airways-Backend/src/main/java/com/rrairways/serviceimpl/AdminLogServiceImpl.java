package com.rrairways.serviceimpl;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.rrairways.service.AdminLogService;
@Service
public class AdminLogServiceImpl implements AdminLogService{

	@Override
	public void logAction(String action) {
		 System.out.println(LocalDateTime.now() + " - ADMIN ACTION: " + action);
		
	}
	
	

}
