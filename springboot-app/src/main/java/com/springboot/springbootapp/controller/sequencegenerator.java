package com.springboot.springbootapp.controller;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

import com.springboot.springbootapp.model.dbsequence;
@Service
public class sequencegenerator {
	
	
	
	 @Autowired
	    private MongoOperations mongoOperations;


	 public String getSequenceNumber(String sequenceName) {
	        Query query = new Query(Criteria.where("id").is(sequenceName));
	        Update update = new Update().inc("seq", 1);
	        dbsequence counter = mongoOperations
	                .findAndModify(query,
	                        update, options().returnNew(true).upsert(true),
	                        dbsequence.class);

	        return !Objects.isNull(counter) ? counter.getSeq():"R_001";
	    }

}
