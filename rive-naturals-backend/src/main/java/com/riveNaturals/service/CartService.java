package com.riveNaturals.service;

import com.riveNaturals.model.Cart;
import com.riveNaturals.model.CartItemDTO;

import java.util.List;

public interface CartService {
    Cart addToCart(Cart cart);
    List<CartItemDTO> getCarts();
    void removeFromCart(Long id);
    Cart updateCartQuantity(Long id, int newQuantity);
}
