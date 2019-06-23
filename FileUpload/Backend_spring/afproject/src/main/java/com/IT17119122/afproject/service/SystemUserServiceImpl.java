package com.IT17119122.afproject.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.IT17119122.afproject.model.Instructor;
import com.IT17119122.afproject.model.Student;
import com.IT17119122.afproject.model.SystemUser;
import com.IT17119122.afproject.repository.InstructorRepository;
import com.IT17119122.afproject.repository.StudentRepository;
import com.IT17119122.afproject.repository.SystemUserRepository;

/**
*
* @author (IT17119122 ** Liyanage I.M)
*/
@Service
public class SystemUserServiceImpl {
   
   
   @Autowired
   StudentRepository studentRepository;
   
   @Autowired
   InstructorRepository instructorRepository;
//   { "_id": "apples", "qty": 5 }
   
//   public SystemUser findByUsernameandPassword(String username,String password) {
//       return repository.findByUsernameandPassword(username,password);
//   }
   
 public Object findByUsernameandPassword(String userid,String password) {
	 
	 Collection<Student> student = studentRepository.findAll();
	 
	 Collection<Instructor> instructor  = instructorRepository.findAll();
	 
	 for(Student s1 : student) {
		 
		 if(s1.getUserid().equals(userid)  && s1.getPassword().equals(password)) {
			 return s1;
		 }
	 }
	 for(Instructor i1 : instructor) {
		 
		 if(i1.getUserid().equals(userid)  && i1.getPassword().equals(password)) {
			 return i1;
		 }
	 }
	 return null;
 }
//   public SystemUser saveUser(SystemUser obj){
//       return repository.save(obj);
//   }
}
