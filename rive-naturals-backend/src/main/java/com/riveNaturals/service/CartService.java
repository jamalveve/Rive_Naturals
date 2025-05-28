package com.riveNaturals.service;

import com.riveNaturals.model.Cart;
import java.util.List;

public interface CartService {
    Cart addToCart(Cart cart);
    
    List<Cart> getAllCarts();
}
