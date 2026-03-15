package com.example.Fullstack.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;
import org.springframework.stereotype.Repository;

import com.example.Fullstack.entity.student;

@Repository
public interface studentrepo extends JpaRepository<student,Integer>{
    
}
