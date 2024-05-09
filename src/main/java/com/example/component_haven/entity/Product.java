package com.example.component_haven.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Base64;


@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(name="name", unique = true)
    private String name;
    @Column
    private int price;
    @Column
    private String text;
    @Column
    private byte[] img;
    public String generateBase64Image(){
        return Base64.getEncoder().encodeToString(this.img);
    }
    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
    @JoinColumn
    private AppUser user;
}
