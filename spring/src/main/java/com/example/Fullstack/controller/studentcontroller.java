package com.example.Fullstack.controller;
import com.example.Fullstack.dto.studentDTO;
import com.example.Fullstack.entity.student;
import com.example.Fullstack.services.studentService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/students")
public class studentcontroller {
    private final StudentService studentservice;
    
    public studentcontroller(StudentService studentService)
    
}
