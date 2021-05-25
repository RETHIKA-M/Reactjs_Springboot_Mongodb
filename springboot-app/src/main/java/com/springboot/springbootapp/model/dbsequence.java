package com.springboot.springbootapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Document(collection = "studentv")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class dbsequence {
	
	
	
	    @Id
	    private String  id;
	    private String seq;
		public String getSeq() {
			return seq;
		}
		public void setSeq(String seq) {
			this.seq = seq;
		}
		
		


}
