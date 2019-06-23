package com.IT17119122.afproject.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.IT17119122.afproject.model.Courses;

public interface CoursesRepository extends MongoRepository<Courses, String>{

}
