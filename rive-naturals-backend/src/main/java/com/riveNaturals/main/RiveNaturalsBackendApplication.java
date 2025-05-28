package com.riveNaturals.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication(scanBasePackages={"com.riveNaturals.model","com.riveNaturals.repository","com.riveNaturals.service","com.riveNaturals.controller","com.riveNaturals.main","com.riveNaturals.config"})

@EnableJpaRepositories(basePackages = "com.riveNaturals.repository")
@EntityScan(basePackages = { "com.riveNaturals.model"})


public class RiveNaturalsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(RiveNaturalsBackendApplication.class, args);
	}

}
