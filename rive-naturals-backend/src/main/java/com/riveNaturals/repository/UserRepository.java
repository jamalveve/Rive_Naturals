package com.riveNaturals.repository;

import com.riveNaturals.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long> {
    Users findByName(String name);
}
