package com.IT17119122.afproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.IT17119122.afproject.model.Student;
import com.IT17119122.afproject.repository.StudentRepository;

@Service
public class StudentServiceImpl {
	
	@Autowired
	StudentRepository repository;
	
	public Student saveStudent(Student obj){
       return repository.save(obj);
   }

}
