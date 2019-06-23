package com.IT17119122.afproject.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.IT17119122.afproject.model.Student;
import com.IT17119122.afproject.service.StudentServiceImpl;

/**
*
* @author (IT17119122 ** Liyanage I.M)
*/
@RestController
@CrossOrigin
public class StudentController {
	
	@Autowired
	StudentServiceImpl studentServiceImpl;
	
    /*to save a SystemUser*/
	@RequestMapping(value = "/savestudent", method = RequestMethod.POST)
	public ResponseEntity<Student> saveCpbMeetingsDetails(@Valid @RequestBody Student student) {
		try {
			//Save SystemUser
			Student obj = studentServiceImpl.saveStudent(student);
			return new ResponseEntity<>(obj, HttpStatus.OK);
		} catch (Exception ex) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
}

}
