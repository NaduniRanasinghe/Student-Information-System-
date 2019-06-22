package com.IT17119122.afproject.controller;

import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.IT17119122.afproject.model.Courses;
import com.IT17119122.afproject.model.SystemUser;
import com.IT17119122.afproject.service.CoursesServiceImpl;
import com.IT17119122.afproject.service.SystemUserServiceImpl;

/**
*
* @author (IT17119122 ** Liyanage I.M)
*/
@RestController
@CrossOrigin
public class CoursesController {
	
    @Autowired
    CoursesServiceImpl coursesUserServiceImpl;
	
    /*getCourses List*/
	@RequestMapping(value = "/getcourse", method = RequestMethod.GET)
	public ResponseEntity <Collection<Courses>> getCoursesDetails() {
		try {
			Collection<Courses>  courses = coursesUserServiceImpl.getCourseList();
			return new ResponseEntity<>(courses, HttpStatus.OK);
		} catch (Exception ex) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
}

}
