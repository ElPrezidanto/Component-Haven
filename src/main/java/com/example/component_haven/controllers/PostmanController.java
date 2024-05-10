package com.example.component_haven.controllers;

import com.example.component_haven.dto.ProductDTO;
import com.example.component_haven.entity.Product;
import com.example.component_haven.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class PostmanController {
    private final ProductService productService;

    @RequestMapping(value = "/postman", method = RequestMethod.GET)
    public ResponseEntity<List<Product>> readAll() {
        return new ResponseEntity<>(productService.readAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/postman", method = RequestMethod.POST)
    public ResponseEntity<Product> create(@RequestBody ProductDTO productDTO) {
        return new ResponseEntity<>(productService.create(productDTO), HttpStatus.OK);
    }

    @RequestMapping(value = "/postman", method = RequestMethod.PUT)
    public ResponseEntity<Product> update(@RequestBody Product product) {
        return new ResponseEntity<>(productService.update(product), HttpStatus.OK);
    }

    @DeleteMapping("/postman/{id}")
    public HttpStatus delete(@PathVariable Long id){
        productService.delete(id);
        return HttpStatus.OK;
    }

}


