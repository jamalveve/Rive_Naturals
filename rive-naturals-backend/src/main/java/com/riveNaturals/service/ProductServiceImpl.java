package com.riveNaturals.service;

import com.riveNaturals.model.Products;
import com.riveNaturals.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Products createProduct(Products product) {
        return productRepository.save(product);
    }

    @Override
    public Products updateProduct(Long id, Products product) {
        product.setId(id);
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public List<Products> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Products getProductById(Long id) {
        Optional<Products> product = productRepository.findById(id);
        return product.orElse(null);
    }

    @Override
    public Products saveProducts(Products product) {
        return productRepository.save(product);
    }
}
