package com.riveNaturals.service;

import com.riveNaturals.model.Users;
import com.riveNaturals.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public Users registerUser(Users user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public boolean authenticate(String name, String rawPassword) {
        Users user = userRepository.findByName(name);
        return user != null && passwordEncoder.matches(rawPassword, user.getPassword());
    }
}
