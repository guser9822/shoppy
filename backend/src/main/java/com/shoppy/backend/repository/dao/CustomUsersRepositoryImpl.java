package com.shoppy.backend.repository.dao;

import com.shoppy.backend.model.Users;
import com.mongodb.client.model.Filters;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;

public class CustomUsersRepositoryImpl implements CustomUsersRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public Users customMethod(String username, String password) {

/*         Users user = null;
        String encodedPass = passwordEncoder.encode(password);

        try {
            user = mongoTemplate.getCollection("users")
                    .find(Filters.eq("username", username),Users.class)
                    .first();
            if (user != null) {
                boolean isPasswordCorrect = passwordEncoder.matches(password, encodedPass);
                int g= 19;
            }

        } catch (Exception e) {
            // Error
        }

        return user; */
        return null;
    }

}