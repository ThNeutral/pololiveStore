package com.example.Services.DAOs;

import com.example.Entities.User;

import java.util.List;

public interface UserDAO {
    String save(User user);
    String delete(int id);
    User findById(int id);
    User findByUserName(String name);
    User findByEmail(String email);
    List<User> findAllByDescOrder();
}
