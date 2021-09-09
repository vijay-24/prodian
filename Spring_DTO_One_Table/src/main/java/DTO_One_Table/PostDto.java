package DTO_One_Table;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;

import lombok.Data;


	@Data
	public class PostDto implements Serializable{
		
		public PostDto(long id,String firstName, String lastName, String dob, String email, String mobile) {
			super();
			this.id = id;
			this.firstName = firstName;
			this.lastName = lastName;
			this.dob = dob;
			this.email = email;
			this.mobile = mobile;
		}
		
		public PostDto(String firstName, String lastName, String dob, String email, String mobile) {
			super();
			this.firstName = firstName;
			this.lastName = lastName;
			this.dob = dob;
			this.email = email;
			this.mobile = mobile;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public String getDob() {
			return dob;
		}
		public void setDob(String dob) {
			this.dob = dob;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getMobile() {
			return mobile;
		}
		public void setMobile(String mobile) {
			this.mobile = mobile;
		}
		public PostDto() {
			
		}
		
	
		private Long id;
		private String firstName;
		private String lastName;
		private String dob;
		private String email;
		private String mobile;
	}