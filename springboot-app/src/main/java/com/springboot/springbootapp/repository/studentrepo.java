package com.springboot.springbootapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.springboot.springbootapp.model.student;

public interface studentrepo extends MongoRepository<student, String>{

}
