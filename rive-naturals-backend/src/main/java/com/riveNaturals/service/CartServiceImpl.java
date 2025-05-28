// package com.riveNaturals.service;


// import com.riveNaturals.model.Cart;
// import com.riveNaturals.repository.CartRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;

// @Service
// public class CartServiceImpl implements CartService {

//     @Autowired
//     private CartRepository cartRepository;

//     @Override
//     public Cart addToCart(Cart cart) {
//         return cartRepository.save(cart);
//     }

//     @Override
//     public List<Cart> getAllCarts() {
//         return cartRepository.findAll();
//     }

// }

package com.riveNaturals.service;

import com.riveNaturals.model.Cart;
import com.riveNaturals.model.Products;
import com.riveNaturals.repository.CartRepository;
import com.riveNaturals.repository.ProductRepository;
import com.riveNaturals.utils.CartItemDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Cart addToCart(Cart cart) {
        Optional<Cart> existingCart = cartRepository.findByProductId(cart.getProductId());
        if (existingCart.isPresent()) {
            Cart existing = existingCart.get();
            existing.setQuantity(existing.getQuantity() + cart.getQuantity());
            return cartRepository.save(existing);
        } else {
            return cartRepository.save(cart);
        }
    }

    @Override
    public List<CartItemDTO> getCarts() {
        List<Cart> carts = cartRepository.findAll();
        List<CartItemDTO> cartItemDTOs = new ArrayList<>();
        for (Cart cart : carts) {
            Optional<Products> productOpt = productRepository.findById(cart.getProductId());
            if (productOpt.isPresent()) {
                Products product = productOpt.get();
                CartItemDTO dto = new CartItemDTO();
                dto.setId(cart.getId());
                dto.setProductId(cart.getProductId());
                dto.setQuantity(cart.getQuantity());
                dto.setName(product.getName());
                dto.setPrice(product.getPrice());
                dto.setImagePath(product.getImagePath());
                cartItemDTOs.add(dto);
            }
        }
        return cartItemDTOs;
    }

    @Override
    public void removeFromCart(Long id) {
        cartRepository.deleteById(id);
    }

    @Override
    public Cart updateCartQuantity(Long id, int newQuantity) {
        Cart cart = cartRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cart item not found"));
        cart.setQuantity(newQuantity);
        return cartRepository.save(cart);
    }
}
