package com.example.Fullstack.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class studentDTO {
    @NotBlank(message="Name cannot be Empt")
    private String name;

    @Email(message = "Invalid Email")
    private String email;

    @NotBlank(message="Course cannot be empty")
    private String course; 
}
