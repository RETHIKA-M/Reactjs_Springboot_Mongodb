package com.springboot.springbootapp.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.springbootapp.model.student;
import com.springboot.springbootapp.repository.studentrepo;
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class studentcontroller {
	@Autowired
	private studentrepo repository;
	
	@Autowired
	private sequencegenerator service;
	
	@PostMapping("/addstudent")
	public String savestudent(@Valid @RequestBody student student,BindingResult br) {
		
		if(br.hasErrors()) {
			return "Name only letters,dob,clas,division,gender are reqiured";
		}
		
		else {
		student.setId("R-00"+service.getSequenceNumber(student.SEQUENCE_NAME));
		
		repository.save(student);
		return "Registered";
		}
	}
	
	
	@GetMapping("/find")
	public List<student> getstudent(){
		 
		return repository.findAll(Sort.by(Sort.Direction.ASC, "name"));
	}

}
