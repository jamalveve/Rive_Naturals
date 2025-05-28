package com.riveNaturals.controller;

import com.riveNaturals.model.Products;
import com.riveNaturals.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Products> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getProductImage(@PathVariable Long id) {
        byte[] image = productService.getProductImage(id);
        if (image != null) {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG); // or IMAGE_PNG if needed
            return new ResponseEntity<>(image, headers, HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/image")
    public ResponseEntity<?> uploadImage(@PathVariable Long id, @RequestParam("file") MultipartFile file)
            throws IOException {
        productService.uploadProductImage(id, file);
        return ResponseEntity.ok().build();
    }

    // Add endpoints for create, update, delete as needed
}
