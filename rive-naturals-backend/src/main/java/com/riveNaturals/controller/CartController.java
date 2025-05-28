// package com.riveNaturals.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;
// import com.riveNaturals.model.Cart;
// import com.riveNaturals.model.Products;
// import com.riveNaturals.repository.CartRepository;
// import com.riveNaturals.repository.ProductRepository;
// import com.riveNaturals.utils.CartItemDTO;
// import java.util.*;

// @RestController
// @RequestMapping("/api/carts")
// @CrossOrigin(origins = "http://localhost:5173")
// public class CartController {
//     @Autowired
//     private CartRepository cartRepository;

//     @Autowired
//     private ProductRepository productRepository;

    
//     @PutMapping
//     public Cart addToCart(@RequestBody Cart cart) {
//         Optional<Cart> existingCart = cartRepository.findByProductId(cart.getProductId());
//         if (existingCart.isPresent()) {
//             Cart existing = existingCart.get();
//             existing.setQuantity(existing.getQuantity() + cart.getQuantity());
//             return cartRepository.save(existing);
//         } else {
//             return cartRepository.save(cart);
//         }
//     }

//     @GetMapping
//     public List<CartItemDTO> getCarts() {
//         List<Cart> carts = cartRepository.findAll();
//         List<CartItemDTO> cartItemDTOs = new ArrayList<>();
//         for (Cart cart : carts) {
//             Optional<Products> productOpt = productRepository.findById(cart.getProductId());
//             if (productOpt.isPresent()) {
//                 Products product = productOpt.get();
//                 CartItemDTO dto = new CartItemDTO();
//                 dto.setId(cart.getId());
//                 dto.setProductId(cart.getProductId());
//                 dto.setQuantity(cart.getQuantity());
//                 dto.setName(product.getName());
//                 dto.setPrice(product.getPrice());
//                 dto.setImagePath(product.getImagePath());
//                 cartItemDTOs.add(dto);
//             }
//         }
//         return cartItemDTOs;
//     }

//     @DeleteMapping("/{id}")
//     public void removeFromCart(@PathVariable Long id) {
//         cartRepository.deleteById(id);
//     }

//     @PatchMapping("/{id}")
//     public Cart updateCartQuantity(@PathVariable Long id, @RequestBody Map<String, Integer> body) {
//         int newQuantity = body.get("quantity");
//         Cart cart = cartRepository.findById(id)
//                 .orElseThrow(() -> new RuntimeException("Cart item not found"));
//         cart.setQuantity(newQuantity);
//         return cartRepository.save(cart);
//     }

// }

package com.riveNaturals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.riveNaturals.model.Cart;
import com.riveNaturals.utils.CartItemDTO;
import com.riveNaturals.service.CartService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/carts")
@CrossOrigin(origins = "http://localhost:5173")
public class CartController {

    @Autowired
    private CartService cartService;

    @PutMapping
    public Cart addToCart(@RequestBody Cart cart) {
        return cartService.addToCart(cart);
    }

    @GetMapping
    public List<CartItemDTO> getCarts() {
        return cartService.getCarts();
    }

    @DeleteMapping("/{id}")
    public void removeFromCart(@PathVariable Long id) {
        cartService.removeFromCart(id);
    }

    @PatchMapping("/{id}")
    public Cart updateCartQuantity(@PathVariable Long id, @RequestBody Map<String, Integer> body) {
        int newQuantity = body.get("quantity");
        return cartService.updateCartQuantity(id, newQuantity);
    }
}

