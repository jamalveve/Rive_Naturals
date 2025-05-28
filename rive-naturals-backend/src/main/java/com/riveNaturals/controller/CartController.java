
package com.riveNaturals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.riveNaturals.model.Cart;
import com.riveNaturals.model.CartItemDTO;
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
