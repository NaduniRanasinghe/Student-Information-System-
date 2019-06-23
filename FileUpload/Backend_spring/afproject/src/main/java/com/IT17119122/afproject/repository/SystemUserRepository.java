package com.IT17119122.afproject.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.IT17119122.afproject.model.SystemUser;

public interface SystemUserRepository extends MongoRepository<SystemUser, String>{

//    @Query("select su from SystemUser su where su.username = ?1 and su.password = ?2")
//    SystemUser findByUsernameandPassword(String username,String password);
	
    
}
