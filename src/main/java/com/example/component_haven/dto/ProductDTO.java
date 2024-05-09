package com.example.component_haven.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProductDTO {
    private String name;
    private String text;
    private Integer price;
    private byte[] img;
}
