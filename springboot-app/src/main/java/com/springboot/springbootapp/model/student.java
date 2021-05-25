package com.springboot.springbootapp.model;


import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection= "student")
public class student {
	
	

    @Transient
    public static final String SEQUENCE_NAME = "admission_number";
	@Id
	
	
	private String id;
	@NotNull(message="Name is required") 
	@Pattern(regexp="[^0-9]*")
	private String name;
	@NotNull
	private String dob;
	@NotNull
	private String clas;
	@NotNull
	private String division;
	@NotNull
	private String gender;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getClas() {
		return clas;
	}
	public void setClas(String clas) {
		this.clas = clas;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	@Override
	public String toString() {
		return "student [id=" + id + ", name=" + name + ", dob=" + dob + ", clas=" + clas + ", division=" + division
				+ ", gender=" + gender + "]";
	}
	
	
	

	
	
	

}
