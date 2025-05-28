package com.riveNaturals.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Disable CSRF for simplicity with frontend
                .authorizeHttpRequests()
                .requestMatchers("/api/users/register", "/api/users/login", "/api/products/**", "/api/products/**",
                        "/api/carts/**")
                .permitAll()

                // user or admin
                .requestMatchers(HttpMethod.GET, "/api/products/**").permitAll() // anyone can view products

                .requestMatchers("/api/products/**").hasRole("ADMIN") // only ADMIN for POST, PUT, DELETE
                .requestMatchers("/actuator/**").hasRole("ADMIN") // restrict actuator to ADMIN

                .anyRequest().authenticated()
                .and()
                .httpBasic(); // Use basic auth, or you can use JWT or sessions

        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
