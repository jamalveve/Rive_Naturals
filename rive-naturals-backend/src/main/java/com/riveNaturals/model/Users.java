package com.riveNaturals.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter

public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false) // users or Admin
    private String role; // e.g

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String password;
}
