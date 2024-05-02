package com.example.Services.DAOs;

import com.example.Entities.Category;

import java.sql.SQLException;
import java.util.List;

public interface CategoryDAO {
    Category findByName(String category_name) throws SQLException;
    List<Category> findAllCategories() throws SQLException;
}
