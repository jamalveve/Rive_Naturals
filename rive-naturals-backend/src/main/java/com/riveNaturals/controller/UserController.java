package com.riveNaturals.controller;

import com.riveNaturals.model.Users;
import com.riveNaturals.service.UserService;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173") // Allow React frontend
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Users register(@RequestBody Users user) {
        return userService.registerUser(user);
    }

    // @PostMapping("/login")
    // public String login(@RequestBody Users user) {
    // boolean success = userService.authenticate(user.getName(),
    // user.getPassword());
    // return success ? "Login successful" : "Invalid credentials";
    // }
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Users user) {
        boolean success = userService.authenticate(user.getName(), user.getPassword());

        Map<String, String> response = new HashMap<>();
        if (success) {
            // Fetch full user details to get role, etc.
            Users loggedInUser = userService.getUserByName(user.getName());

            response.put("message", "Login successful");
            response.put("name", loggedInUser.getName());
            response.put("role", loggedInUser.getRole());
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Invalid credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

}
