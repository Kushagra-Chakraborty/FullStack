package com.example.Fullstack.services;

import com.example.Fullstack.dto.studentDTO;
import com.example.Fullstack.entity.student;
import java.util.List;

public interface studentService {
    student createStudent(studentDTO studentDTO);
    List<student> getAllStudent();
}