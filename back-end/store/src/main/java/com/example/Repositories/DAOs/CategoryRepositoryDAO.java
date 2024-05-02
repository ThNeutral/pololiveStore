package com.example.Repositories.DAOs;

import com.example.Entities.Category;

import java.sql.SQLException;
import java.util.List;

public interface CategoryRepositoryDAO {
    Category findByName(String category) throws SQLException;
    List<Category> findAllCategories() throws SQLException;
}
