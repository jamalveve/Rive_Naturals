package com.riveNaturals.repository;


import com.riveNaturals.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

//data access interface
public interface ProductRepository extends JpaRepository<Products, Long> {

}

