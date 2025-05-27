package com.riveNaturals.service;

import com.riveNaturals.model.Users;
import com.riveNaturals.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Users registerUser(Users user) {
        return userRepository.save(user);
    }

    public boolean authenticate(String name, String password) {
        Users user = userRepository.findByName(name);
        return user != null && user.getPassword().equals(password);
    }
}
