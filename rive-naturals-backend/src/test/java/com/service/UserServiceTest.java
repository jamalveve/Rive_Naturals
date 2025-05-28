package com.service;

import com.riveNaturals.service.UserService;
import com.riveNaturals.model.Users;
import com.riveNaturals.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import com.riveNaturals.RiveNaturalsBackendApplication;

@ExtendWith(MockitoExtension.class)
@SpringBootTest(classes = com.riveNaturals.RiveNaturalsBackendApplication.class)

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @BeforeEach
    void setup() {
        // No explicit setup needed since we're using the real BCryptPasswordEncoder for
        // password verification
    }

    @Test
    void registerUser_shouldEncodePasswordAndSetUserRole() {
        Users user = new Users();
        user.setName("john");
        user.setPassword("plainPassword");
        user.setRole(null);

        when(userRepository.save(any(Users.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Users savedUser = userService.registerUser(user);

        // Assert password is encoded and not plain text
        assertNotEquals("plainPassword", savedUser.getPassword());
        assertTrue(passwordEncoder.matches("plainPassword", savedUser.getPassword()));

        // Default role should be USER
        assertEquals("USER", savedUser.getRole());

        verify(userRepository).save(savedUser);
    }

    @Test
    void registerUser_shouldAssignAdminRoleIfNameIsAdminUser() {
        Users user = new Users();
        user.setName("adminUser");
        user.setPassword("adminPass");

        when(userRepository.save(any(Users.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Users savedUser = userService.registerUser(user);

        assertEquals("ADMIN", savedUser.getRole());
        assertTrue(passwordEncoder.matches("adminPass", savedUser.getPassword()));

        verify(userRepository).save(savedUser);
    }

    @Test
    void authenticate_shouldReturnTrueForCorrectPassword() {
        String rawPassword = "mypassword";
        String encodedPassword = passwordEncoder.encode(rawPassword);

        Users user = new Users();
        user.setName("john");
        user.setPassword(encodedPassword);

        when(userRepository.findByName("john")).thenReturn(user);

        boolean result = userService.authenticate("john", rawPassword);

        assertTrue(result);
    }

    @Test
    void authenticate_shouldReturnFalseForIncorrectPassword() {
        String rawPassword = "mypassword";
        String wrongPassword = "wrongpass";
        String encodedPassword = passwordEncoder.encode(rawPassword);

        Users user = new Users();
        user.setName("john");
        user.setPassword(encodedPassword);

        when(userRepository.findByName("john")).thenReturn(user);

        boolean result = userService.authenticate("john", wrongPassword);

        assertFalse(result);
    }

    @Test
    void authenticate_shouldReturnFalseIfUserNotFound() {
        when(userRepository.findByName("unknown")).thenReturn(null);

        boolean result = userService.authenticate("unknown", "anyPass");

        assertFalse(result);
    }

    @Test
    void getUserByName_shouldReturnUserFromRepository() {
        Users user = new Users();
        user.setName("alice");

        when(userRepository.findByName("alice")).thenReturn(user);

        Users foundUser = userService.getUserByName("alice");

        assertNotNull(foundUser);
        assertEquals("alice", foundUser.getName());
    }
}
