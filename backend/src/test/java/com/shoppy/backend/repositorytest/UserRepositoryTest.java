package com.shoppy.backend.repositorytest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import com.shoppy.backend.model.Users;
import com.shoppy.backend.repository.UsersRepository;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class UserRepositoryTest{

    @Autowired
    protected UsersRepository repository;

    @BeforeAll
    public void before() {
        repository.deleteAll();
/*         Users user = new Users();
        user.setFirstName("Riccardo");
        user.setLastName("Dan");
        user.setUsername("user");
        user.setPassword("user"); */
        // save a couple of customers
        //repository.save(user);
    }

    @Test
    public void testGetByLastName() {
        List<Users> customers = repository.findByLastName("Dan");
        assertEquals(1, customers.size());
    }

    @Test
    public void testFindByFirstName() {
        List<Users> customers = repository.findByFirstName("Riccardo");
        assertEquals(1, customers.size());
    }

    @Test
    public void testFindByUsernameAndPassword() {
        Users u = repository.findByUsernameAndPassword("user","user");
        assertNotNull(u);
        assertEquals(u.getFirstName(), "Riccardo");
        assertEquals(u.getLastName(), "Dan");
    }

}