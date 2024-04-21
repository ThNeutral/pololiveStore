package com.example.Services;

import com.example.Entities.User;
import com.example.Repositories.UserRepository;
import com.example.Services.DAOs.UserDAO;

import java.util.List;

public class UserService implements UserDAO {
    private UserRepository userRepository = new UserRepository();

    @Override
    public String save(User user) {
        return userRepository.save(user);
    }
    @Override
    public String delete(int id) {
        return userRepository.delete(id);
    }
    @Override
    public User findById(int id) {
        if (userRepository.findById(id) == null) {
            return null;
        } else {
            return userRepository.findById(id);
        }
    }
    @Override
    public User findByEmail(String email) {
        if (userRepository.findByEmail(email) == null) {
            return null;
        } else {
            return userRepository.findByEmail(email);
        }
    }
    @Override
    public User findByUserName(String name) {
        if (userRepository.findByUserName(name) == null){
            return null;
        } else {
            return userRepository.findByUserName(name);
        }
    }

    @Override
    public List<User> findAllByDescOrder() {
        return userRepository.findAllUsers();
    }
}
