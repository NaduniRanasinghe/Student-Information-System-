package com.IT17119122.afproject.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.IT17119122.afproject.model.Courses;
import com.IT17119122.afproject.repository.CoursesRepository;

/**
*
* @author (IT17119122 ** Liyanage I.M)
*/
@Service
public class CoursesServiceImpl {
	
	@Autowired
	CoursesRepository repository;

	 public Collection<Courses> getCourseList(){
	     return repository.findAll();
	 }

}
