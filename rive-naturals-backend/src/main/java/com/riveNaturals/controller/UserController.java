package com.riveNaturals.controller;

import com.riveNaturals.model.Users;
import com.riveNaturals.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173") // Allow React frontend
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Users register(@RequestBody Users user) {
            System.out.println("Register endpoint hit with: " + user);

        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody Users user) {
        boolean success = userService.authenticate(user.getName(), user.getPassword());
        return success ? "Login successful" : "Invalid credentials";
    }
}
