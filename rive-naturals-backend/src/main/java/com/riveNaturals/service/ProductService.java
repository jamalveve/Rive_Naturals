package com.riveNaturals.service;


import com.riveNaturals.model.Products;
import java.util.List;

public interface ProductService {

    Products createProduct(Products product);

    Products updateProduct(Long id, Products product);

    void deleteProduct(Long id);

    List<Products> getAllProducts();

    Products getProductById(Long id);

    Products saveProducts(Products product);

}
