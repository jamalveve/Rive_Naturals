package com.riveNaturals.service;

import com.riveNaturals.model.Products;
import com.riveNaturals.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Products> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Products getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

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
    public byte[] getProductImage(Long id) {
        Optional<Products> productOpt = productRepository.findById(id);
        return productOpt.map(Products::getImage).orElse(null);
    }

    @Override
    public void uploadProductImage(Long id, MultipartFile file) throws IOException {
        Optional<Products> productOpt = productRepository.findById(id);
        if (productOpt.isPresent()) {
            Products product = productOpt.get();
            product.setImage(file.getBytes());
            productRepository.save(product);
        } else {
            throw new RuntimeException("Product not found");
        }
    }
}
