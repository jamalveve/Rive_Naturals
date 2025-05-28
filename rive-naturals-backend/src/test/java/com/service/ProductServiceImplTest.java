package com.service;

import com.riveNaturals.model.Products;
import com.riveNaturals.service.ProductServiceImpl;
import org.springframework.web.multipart.MultipartFile;

import com.riveNaturals.repository.ProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import java.io.IOException;
import org.mockito.MockitoAnnotations;

import java.util.*;

import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProductServiceImplTest {

    @InjectMocks
    private ProductServiceImpl productService;

    @Mock
    private ProductRepository productRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllProducts_returnsList() {
        List<Products> mockList = List.of(new Products(), new Products());
        when(productRepository.findAll()).thenReturn(mockList);

        List<Products> products = productService.getAllProducts();

        assertEquals(2, products.size());
        verify(productRepository).findAll();
    }

    @Test
    void getProductById_existingId_returnsProduct() {
        Products product = new Products();
        product.setId(1L);

        when(productRepository.findById(1L)).thenReturn(Optional.of(product));

        Products result = productService.getProductById(1L);

        assertNotNull(result);
        assertEquals(1L, result.getId());
        verify(productRepository).findById(1L);
    }

    @Test
    void getProductById_nonExistingId_returnsNull() {
        when(productRepository.findById(1L)).thenReturn(Optional.empty());

        Products result = productService.getProductById(1L);

        assertNull(result);
        verify(productRepository).findById(1L);
    }

    @Test
    void createProduct_savesAndReturnsProduct() {
        Products product = new Products();

        when(productRepository.save(product)).thenReturn(product);

        Products result = productService.createProduct(product);

        assertSame(product, result);
        verify(productRepository).save(product);
    }

    @Test
    void updateProduct_setsIdAndSaves() {
        Products product = new Products();

        when(productRepository.save(any())).thenReturn(product);

        Products result = productService.updateProduct(5L, product);

        assertEquals(5L, product.getId());
        assertSame(product, result);
        verify(productRepository).save(product);
    }

    @Test
    void deleteProduct_callsRepositoryDelete() {
        doNothing().when(productRepository).deleteById(1L);

        productService.deleteProduct(1L);

        verify(productRepository).deleteById(1L);
    }

    @Test
    void getProductImage_existingProduct_returnsImage() {
        Products product = new Products();
        byte[] image = new byte[] { 1, 2, 3 };
        product.setImage(image);

        when(productRepository.findById(1L)).thenReturn(Optional.of(product));

        byte[] result = productService.getProductImage(1L);

        assertArrayEquals(image, result);
        verify(productRepository).findById(1L);
    }

    @Test
    void getProductImage_nonExistingProduct_returnsNull() {
        when(productRepository.findById(1L)).thenReturn(Optional.empty());

        byte[] result = productService.getProductImage(1L);

        assertNull(result);
        verify(productRepository).findById(1L);
    }

    @Test
    void uploadProductImage_existingProduct_savesImage() throws IOException {
        Products product = new Products();
        MultipartFile file = mock(MultipartFile.class);
        byte[] bytes = new byte[] { 9, 8, 7 };

        when(productRepository.findById(1L)).thenReturn(Optional.of(product));
        when(file.getBytes()).thenReturn(bytes);
        when(productRepository.save(product)).thenReturn(product);

        productService.uploadProductImage(1L, file);

        assertArrayEquals(bytes, product.getImage());
        verify(productRepository).findById(1L);
        verify(file).getBytes();
        verify(productRepository).save(product);
    }

    @Test
    void uploadProductImage_nonExistingProduct_throwsException() {
        MultipartFile file = mock(MultipartFile.class);

        when(productRepository.findById(1L)).thenReturn(Optional.empty());

        RuntimeException exception = assertThrows(RuntimeException.class, () -> {
            productService.uploadProductImage(1L, file);
        });

        assertEquals("Product not found", exception.getMessage());
        verify(productRepository).findById(1L);
        verifyNoMoreInteractions(productRepository);
    }
}
