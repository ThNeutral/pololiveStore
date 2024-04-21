package com.example.Repositories;

import com.example.Audit.*;
import com.example.Entities.Category;
import com.example.Entities.Product;
import com.example.Repositories.DAOs.ProductRepositoryDAO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductRepository implements ProductRepositoryDAO {
    private static Connection conn = null;
    private final String url = "jdbc:mysql://localhost:3307/project";
    private final String DB_USER = "root";
    private final String DB_PASS = "4321";

    public void setConnection() {
        try {
            conn = DriverManager.
                    getConnection(url, DB_USER, DB_PASS);
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
    }
    public String add(Product product){
        setConnection();
        PreparedStatement ps = null;
        String sql = "INSERT INTO products VALUES (?,?,?,?,?,?)";
        String answer = "201_CREATED";

        if (findByName(product.getName()) != null) {

            answer = "The product is in the inventory";

        } else { //Create a new product on the inventory
            try {
                ps = conn.prepareStatement(sql);
                ps.setString(1, "NULL");
                ps.setString(2, product.getName());
                ps.setString(3, product.getDescription());
                ps.setInt(4, product.getAmount());
                ps.setFloat(5, product.getPrice());
                ps.setString(6, product.getImage());

                if (Audit.categoryAudit(product).size() != 0) { //categoryAudit(product) returns mismatched categories
                    for (Category obj : Audit.categoryAudit(product)){
                        answer = "There is no category: " + obj + " in the inventory";
                    }
                    ps.close();
                } else { //Insert the PRODUCT categories into products_categories table
                    ps.executeUpdate();
                    String insert = "INSERT INTO products_categories VALUES (?,?)";

                    for (Category productCategory : product.getCategory()){
                        ps = conn.prepareStatement(insert);
                        ps.setInt(1, product.getId());
                        ps.setInt(2, productCategory.getId());
                        ps.executeUpdate();
                    }
                }
            } catch (SQLException ex) {
                System.out.println("Mistake: java.ProductRepository.line: 28");
                System.out.println("SQLException: " + ex.getMessage());
                System.out.println("SQLState: " + ex.getSQLState());
                System.out.println("VendorError: " + ex.getErrorCode());
            }
        }
        return answer;
    };
    public String delete(int id){
        setConnection();
        PreparedStatement ps = null;
        String sql = "DELETE FROM products WHERE id = ?";
        String answer = null;

        try {
            ps = conn.prepareStatement(sql);
            ps.setInt(1, id);
            ps.executeUpdate();

            answer = "200_OK";

        } catch (SQLException ex) {
            answer = "Mistake: java.ProductRepository.line: 73";
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return answer;
    };
    public Product findById(int id){
        PreparedStatement ps = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM products WHERE product_id = ?";

        Product product = null;
        ArrayList<Category> categories;

        try {
            ps = conn.prepareStatement(sql);
            ps.setInt(1, id);
            rs = ps.executeQuery();

            if (rs.next()) {
                categories = new ArrayList<>();

                for (Category obj : findAllProductCategories(rs.getString(2))) { //findAllProductCategories(String product_name)
                    categories.add(obj);
                }
                product = new Product(
                        rs.getInt(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getFloat(5),
                        rs.getString(6),
                        categories
                );
            } else
                return null;
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return product;
    }

    public Product findByName(String name) {
        setConnection();
        PreparedStatement ps = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM products WHERE product_name = ?";

        Product product = null;
        ArrayList<Category> categories;

        try {
            ps = conn.prepareStatement(sql);
            ps.setString(1, name);
            rs = ps.executeQuery();

            if (rs.next()){
                categories = new ArrayList<>();

                for (Category obj : findAllProductCategories(name)) {
                    categories.add(obj);
                }
                product = new Product(
                        rs.getInt(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getFloat(5),
                        rs.getString(6),
                        categories
                );
            } else
                return null;
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return product;
    }
    public List<Product> findAllByDescOrder(){
        setConnection();
        Statement st = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM products ORDER BY stock_amount DESC";

        Product product = null;
        ArrayList<Category> categories;
        List<Product> products = null;

        try {
            st = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
            rs = st.executeQuery(sql);

            products = new ArrayList<>();

            while (rs.next()) {
                categories = new ArrayList<>();

                for (Category obj : findAllProductCategories(rs.getString(2)) ) { //findAllProductCategories(String product_name)
                    categories.add(obj);
                }

                product = new Product(
                        rs.getInt(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getFloat(5),
                        rs.getString(6),
                        categories
                );
                products.add(product);
            }
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return products;
    };
    public List<Product> findAllByCategory(String category){
        setConnection();
        PreparedStatement ps = null;
        ResultSet rs = null;
        String sql = "CALL findAllByCategory (?)";

        List<Product> products = null;
        ArrayList<Category> categories;
        Product product;

        try {
            ps = conn.prepareStatement(sql);
            ps.setString(1, category);
            rs = ps.executeQuery();

            products = new ArrayList<>();

            while (rs.next()) {
                categories = new ArrayList<>();
                for (Category obj : findAllProductCategories(rs.getString(2))) {
                    categories.add(obj);
                }
                product = new Product(
                        rs.getInt(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getFloat(5),
                        rs.getString(6),
                        categories
                );
                products.add(product);
            }
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " +  ex.getErrorCode());
        }
        return products;
    }
    private List<Category> findAllProductCategories(String name) {
        PreparedStatement ps = null;
        ResultSet rs = null;
        String sql = "CALL findAllProductCategories (?)";

        Category category;
        List<Category> categories = new ArrayList<Category>();
        try {
            ps = conn.prepareStatement(sql);
            ps.setString(1,name);
            rs = ps.executeQuery();

            while (rs.next()) {
                category = new Category(
                        rs.getInt(2),
                        rs.getString(3)
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
