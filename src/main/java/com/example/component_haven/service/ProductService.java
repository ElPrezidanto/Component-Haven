package com.example.component_haven.service;

import com.example.component_haven.dto.ProductDTO;
import com.example.component_haven.entity.AppUser;
import com.example.component_haven.entity.Product;
import com.example.component_haven.repository.ProductRepository;
import com.example.component_haven.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public Product create(ProductDTO productDTO) {
        Product product = Product.builder()
                .name(productDTO.getName())
                .text(productDTO.getText())
                .price(productDTO.getPrice())
                .img(productDTO.getImg())
                .build();
        return productRepository.save(product);
    }

    public List<Product> readAll() {
        return productRepository.findAll();
    }

    public Product update(Product product) {
        return productRepository.save(product);
    }

    public void delete(Long id) {
        productRepository.deleteById(id);
    }

    public Product addToOrder(Product product, Principal principal) {
        product.setUser(getUserByPrincipal(principal));
        return productRepository.save(product);
    }

    public AppUser getUserByPrincipal(Principal principal) {
        if (principal == null) return null;
        return userRepository.findByName(principal.getName()).get();
    }
}
