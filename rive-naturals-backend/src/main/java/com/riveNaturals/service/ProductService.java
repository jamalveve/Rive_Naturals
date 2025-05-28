package com.riveNaturals.service;

import com.riveNaturals.model.Products;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

public interface ProductService {
    List<Products> getAllProducts();
    Products getProductById(Long id);
    Products createProduct(Products product);
    Products updateProduct(Long id, Products product);
    void deleteProduct(Long id);
    byte[] getProductImage(Long id);
    void uploadProductImage(Long id, MultipartFile file) throws IOException;
}
