package com.example.component_haven.controllers;

import com.example.component_haven.dto.ProductDTO;
import com.example.component_haven.entity.Product;
import com.example.component_haven.service.ProductService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Base64;
import java.util.List;

@Controller
@PreAuthorize("hasAuthority('ADMIN')")
@AllArgsConstructor
public class AdminController {
    private static final Logger log = LoggerFactory.getLogger(AdminController.class);
    private final ProductService productService;

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String addMenu(@RequestParam(value = "ask_name", required = false) String ask_name, Model model) {
        List<Product> positions = productService.readAll();
        if (ask_name == null) {
            String answer = "Введите название для поиска";
            model.addAttribute("answer", answer);
        } else {
            long curr_id = findIdByName(ask_name, positions);
            if (curr_id == -1) {
                model.addAttribute("answer", "Данной позиции нет");
            } else {
                model.addAttribute("answer", "ID = " + curr_id);
            }
        }
        model.addAttribute("positions", positions);
        return "admin";
    }

    @RequestMapping(value = "/admin", method = RequestMethod.POST)
    public ResponseEntity<Product> create(@RequestParam String name, @RequestParam Integer price,
                                          @RequestParam String text, @RequestParam String imgBase64,
                                          Model model) {
        byte[] img = Base64.getDecoder().decode(imgBase64);
        ProductDTO productDTO = new ProductDTO(name, text, price, img);
        return new ResponseEntity<>(productService.create(productDTO), HttpStatus.OK);
    }

    @RequestMapping(value = "/admin", method = RequestMethod.DELETE)
    public void delete(@RequestParam Long del_id, Model model) {
        productService.delete(del_id);
    }

    public long findIdByName(String name, List<Product> list) {
        for (int i = 0; i < list.size(); ++i)
            if (list.get(i).getName().equals(name)) {
                return list.get(i).getId();
            }
        return -1;
    }
}
