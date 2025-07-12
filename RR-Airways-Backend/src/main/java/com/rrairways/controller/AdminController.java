package com.rrairways.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rrairways.entity.User;
import com.rrairways.service.AdminLogService;
import com.rrairways.service.BookingService;
import com.rrairways.service.FlightService;
import com.rrairways.service.UserService;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('SUPER_ADMIN') or hasRole('ADMIN')")
public class AdminController {
    @Autowired private UserService userService;
    @Autowired private FlightService flightService;
    @Autowired private BookingService bookingService;
    @Autowired private AdminLogService adminLogService;

    // Example: get dashboard stats
    @GetMapping("/dashboard")
    public Map<String, Long> getDashboardStats() {
        long userCount = userService.countUsers();
        long flightCount = flightService.countFlights();
        long bookingCount = bookingService.countBookings();
        return Map.of("users", userCount, "flights", flightCount, "bookings", bookingCount);
    }

    // Manage users (CRUD)
    @GetMapping("/users")
    public List<User> getAllUsers() { return userService.getAllUsers(); }
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        adminLogService.logAction("Deleted user ID " + id);
    }
    // Similarly, endpoints for flights/bookings...
}



