package com.riveNaturals.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class CartItemDTO {
    private Long id;
    private Long productId;
    private int quantity;
    private String name;
    private String price;
    private String imagePath;
}
