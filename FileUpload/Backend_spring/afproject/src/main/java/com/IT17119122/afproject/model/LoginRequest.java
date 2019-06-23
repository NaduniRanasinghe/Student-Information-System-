package com.IT17119122.afproject.model;

/**
*
* @author (IT17119122 ** Liyanage I.M)
*/
public class LoginRequest {
   
   private String userid;
   private String password;

   public LoginRequest(String userid, String password) {
       this.userid = userid;
       this.password = password;
   }

   public LoginRequest() {
   }

   public String getUserid() {
	return userid;
   }

   public void setUserid(String userid) {
	this.userid = userid;
   }

   public String getPassword() {
       return password;
   }

   public void setPassword(String password) {
       this.password = password;
   }
}
