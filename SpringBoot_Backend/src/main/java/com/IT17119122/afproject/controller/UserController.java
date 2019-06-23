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

import com.IT17119122.afproject.model.LoginRequest;
import com.IT17119122.afproject.model.LoginResponse;
import com.IT17119122.afproject.model.SystemUser;
import com.IT17119122.afproject.service.SystemUserServiceImpl;

/**
*
* @author (IT17119122 ** Liyanage I.M)
*/
@RestController
@CrossOrigin
public class UserController {

    @Autowired
    SystemUserServiceImpl systemUserServiceImpl;
    
    
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        
        try{
        
            Object systemUser = systemUserServiceImpl.findByUsernameandPassword(loginRequest.getUserid(),loginRequest.getPassword());
        
            if(systemUser == null) {
                LoginResponse loginResponse = new LoginResponse();
                
                loginResponse.setResponseCode("LOGIN_FAILED’");
                loginResponse.setResponseMessage("Login failed");
                return new ResponseEntity<>(loginResponse, HttpStatus.OK);        
            }
        
            LoginResponse loginResponse = new LoginResponse();
            
            loginResponse.setResponseCode("LOGIN_SUCCESS");
            loginResponse.setResponseMessage("Successfully logged in");
            loginResponse.setSystemUser(systemUser);
            return new ResponseEntity<>(loginResponse, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
//        /*to save a SystemUser*/
//    @RequestMapping(value = "/saveuser", method = RequestMethod.POST)
//    public ResponseEntity<SystemUser> saveCpbMeetingsDetails(@Valid @RequestBody SystemUser systemUser) {
//        try {
//            //Save SystemUser
//            SystemUser obj = systemUserServiceImpl.saveUser(systemUser);
//            return new ResponseEntity<>(obj, HttpStatus.OK);
//        } catch (Exception ex) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
}
