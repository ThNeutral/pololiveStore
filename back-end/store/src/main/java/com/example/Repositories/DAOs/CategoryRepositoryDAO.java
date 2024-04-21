package com.example.Repositories.DAOs;

import com.example.Entities.Category;

import java.util.List;

public interface CategoryRepositoryDAO {
    Category findByName(String category);
    List<Category> findAllCategories();
}
