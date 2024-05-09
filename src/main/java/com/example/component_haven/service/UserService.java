package com.example.component_haven.service;

import com.example.component_haven.dto.UserDTO;
import com.example.component_haven.entity.AppUser;
import com.example.component_haven.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public AppUser addUser(UserDTO userDTO) {
        AppUser appUser = AppUser.builder()
                .name(userDTO.getName())
                .password(userDTO.getPassword())
                .email(userDTO.getEmail())
                .roles(userDTO.getRoles())
                .build();
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        return userRepository.save(appUser);
    }

    public List<AppUser> readAll() {
        return userRepository.findAll();
    }
    public AppUser update(AppUser appUser) {
        return userRepository.save(appUser);
    }
    public void delete(Long id) {
        userRepository.deleteById(id);
    }

}
