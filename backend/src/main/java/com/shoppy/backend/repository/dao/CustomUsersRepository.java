package com.shoppy.backend.repository.dao;

import com.shoppy.backend.model.Users;

public interface CustomUsersRepository {
    Users customMethod(String username, String password);
}