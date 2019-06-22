package com.IT17119122.afproject.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
*
* @author (IT17119122 ** Liyanage I.M)
*/

@Document(collection= "systemuser")
public class SystemUser {
   
   @Id
   private String id;

   private String username;
   
   private String userid;

   private String password;

   private String email;

   private String address;
   
   private String type;
   
   private String course;

   public String getId() {
       return id;
   }

   public void setId(String id) {
       this.id = id;
   }

   public String getUsername() {
       return username;
   }
   
   public String getUserid() {
	return userid;
   }

   public void setUserid(String userid) {
	this.userid = userid;
   }

   public void setUsername(String username) {
       this.username = username;
   }

   public String getPassword() {
       return password;
   }

   public void setPassword(String password) {
       this.password = password;
   }

   public String getEmail() {
       return email;
   }

   public void setEmail(String email) {
       this.email = email;
   }

   public String getAddress() {
       return address;
   }

   public void setAddress(String address) {
       this.address = address;
   }

   public String getType() {
	return type;
   }

   public void setType(String type) {
	this.type = type;
   }

   public String getCourse() {
	return course;
   }

   public void setCourse(String course) {
	this.course = course;
   } 

}
