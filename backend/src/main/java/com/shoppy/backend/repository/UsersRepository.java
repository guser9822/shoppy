package com.shoppy.backend.repository;

import java.util.List;

import com.shoppy.backend.model.Users;
import com.shoppy.backend.repository.dao.CustomUsersRepository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UsersRepository extends MongoRepository<Users, String>, CustomUsersRepository {
  
  List<Users> findByLastName(@Param("lastName") String lastName);

  List<Users> findByFirstName(@Param("firstName") String firstName);

  Users findByUsername(@Param("username") String username);

  //Used for login
  Users findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

  Users customMethod(@Param("username") String username, @Param("password") String password);

  //Used for checking user existence
  Users findByUsernameAndEmail(@Param("username") String username, @Param("email") String password);

}