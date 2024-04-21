package com.example.Repositories.DAOs;

import com.example.Entities.User;

import java.util.List;

public interface UserRepositoryDAO {
    String save(User user);
    String delete(int id);
    User findById(int id);
    User findByUserName(String name);
    List<User> findAllUsers();
}
