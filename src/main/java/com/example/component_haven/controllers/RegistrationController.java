package com.example.component_haven.controllers;

import com.example.component_haven.dto.UserDTO;
import com.example.component_haven.entity.AppUser;
import com.example.component_haven.repository.UserRepository;
import com.example.component_haven.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@AllArgsConstructor
public class RegistrationController {
    private final UserService userService;

    @GetMapping("/registration_page")
    public String registration(Model model) {
        return "registration_page";
    }

    @RequestMapping(value = "/registration_page", method = RequestMethod.POST)

    public ResponseEntity<AppUser> create(@RequestParam String email, @RequestParam String name,
                                          @RequestParam String password, Model model) {
        UserDTO userDTO = new UserDTO(name, password, email, "User");
        return new ResponseEntity<>(userService.addUser(userDTO), HttpStatus.OK);
    }
}
