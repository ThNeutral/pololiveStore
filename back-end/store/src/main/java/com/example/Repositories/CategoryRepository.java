package com.example.Repositories;

import com.example.Entities.Category;
import com.example.Repositories.DAOs.CategoryRepositoryDAO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CategoryRepository implements CategoryRepositoryDAO {
    private static Connection conn = null;
    private static final String URL = "jdbc:mysql://localhost:3307/project";
    private static final String DB_USER = "root";
    private static final String DB_PASS = "4321";

    private static void setConnection() {
        try {
            conn = DriverManager
                    .getConnection(URL, DB_USER, DB_PASS);
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
    }
    public Category findByName(String category_name) {
        setConnection();
        PreparedStatement ps = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM category WHERE category = ?";

        Category category = null;

        try {
            ps = conn.prepareStatement(sql);
            ps.setString(1, category_name);
            rs = ps.executeQuery();

            if(rs.next()) {
                category = new Category(
                        rs.getInt(1),
                        rs.getString(2)
                );
            }

        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return category;
    }

    public List<Category> findAllCategories() {
        setConnection();
        Statement stmt = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM category ORDER BY category ASC";

        Category category = null;
        List<Category> categories = new ArrayList<Category>();
        try {
            stmt = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
            rs = stmt.executeQuery(sql);
            while (rs.next()){
                category = new Category(
                        rs.getInt(1),
                        rs.getString(2)
                );
                categories.add(category);
            }
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return categories;
    }
}
