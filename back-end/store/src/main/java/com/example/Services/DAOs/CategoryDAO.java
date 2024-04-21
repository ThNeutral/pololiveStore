package com.example.Services.DAOs;

import com.example.Entities.Category;

import java.util.List;

public interface CategoryDAO {
    Category findByName(String category_name);
    List<Category> findAllCategories();
}
