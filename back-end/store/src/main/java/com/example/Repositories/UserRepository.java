package com.example.Repositories;

import com.example.Entities.Admin;
import com.example.Entities.SuperAdmin;
import com.example.Entities.User;
import com.example.Repositories.DAOs.UserRepositoryDAO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;


public class UserRepository implements UserRepositoryDAO {
    Connection conn = null;
    private final String url = "jdbc:mysql://localhost:3307/project";
    private static final String DB_USER = "root";
    private static final String DB_PASS = "4321";

    private void setConnection(){
        try{
            conn = DriverManager
                    .getConnection(url, DB_USER, DB_PASS);
        } catch (SQLException ex){
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
    }

    public String save(User user){
        setConnection();
        PreparedStatement ps = null;

        if (findByEmail(user.getEmail()) != null) {
            return "User with such email exists";
        } else {
            String sql1 = "INSERT INTO users VALUES (?,?,?,?,?,?)";
            int privilege_id = 0;

            switch(user.getRole().toLowerCase()){ //to set the privilege_id
                case "customer":
                    privilege_id = 3;
                    break;
                case "admin":
                    privilege_id = 2;
                    break;
                case "super_admin":
                    privilege_id = 1;
                    break;
                default:
                    privilege_id = 3;
            }

            try { //to save data in the DB
                ps = conn.prepareStatement(sql1);
                ps.setNull(1, 0);
                ps.setString(2, user.getFname());
                ps.setString(3, user.getLname());
                ps.setString(4, user.getEmail());
                ps.setString(5, user.getPassword());
                ps.setInt(6, privilege_id);
                ps.executeUpdate();

            } catch(SQLException ex) {
                System.out.println("SQLException: " + ex.getMessage());
                System.out.println("SQLState: " + ex.getSQLState());
                System.out.println("VendorError: " + ex.getErrorCode());
            }finally {
                if (ps != null) {
                    try {
                        ps.close();
                    } catch (SQLException sqlEx) {
                    } // ignore
                    ps = null;
                }
            }
        }
        return "201_CREATED";
    }

    public String delete(int id) { //return sth if id doesn't exist
        setConnection();
        Statement stmt = null;

        String sql = "DELETE FROM users WHERE user_id = " + id;

        try {
            stmt = conn.createStatement();
            stmt.executeUpdate(sql);
            System.out.println("User with id: " + id + " was deleted");
        } catch (SQLException ex){
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return "200_OK";
    }

    public User findById(int id) {
        setConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM users WHERE user_id = ?";

        User user = null;
        try {
            stmt = conn.prepareStatement(sql);
            stmt.setInt(1, id);
            rs = stmt.executeQuery();
            if (rs.next()) {
                user = new User(
                        rs.getInt(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5)
                );
            }

        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return user;
    }
    public User findByEmail(String email) {
        setConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM users WHERE email = ?";
        User user = null;
        try {
            stmt = conn.prepareStatement(sql);
            stmt.setString(1,email);
            rs = stmt.executeQuery();
            if (rs.next()) {
                switch (rs.getInt(6)){
                    case 3:
                        user = new User(
                                rs.getInt(1),
                                rs.getString(2),
                                rs.getString(3),
                                rs.getString(4),
                                rs.getString(5));
                        break;
                    case 2:
                        user = new Admin(
                                rs.getInt(1),
                                rs.getString(2),
                                rs.getString(3),
                                rs.getString(4),
                                rs.getString(5));
                        break;
                    case 1:
                        user = new SuperAdmin(
                                rs.getInt(1),
                                rs.getString(2),
                                rs.getString(3),
                                rs.getString(4),
                                rs.getString(5));
                        break;
                }
            }
        } catch (SQLException ex) {
            System.out.println("Mistake is not here");
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        } finally {
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException sqlEx) { } // ignore

                rs = null;
            }
            if (stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException sqlEx) { } // ignore

                stmt = null;
            }
        }

        return user;
    }
    public User findByUserName(String name) {
        setConnection();
        PreparedStatement stmt = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM users WHERE fname LIKE ? OR lname LIKE ?";

        User user = null;
        try {
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, name);
            stmt.setString(2, name);
            rs = stmt.executeQuery();
            if (rs.next()) {
                switch (rs.getInt(6)){
                    case 3:
                        user = new User(
                                rs.getInt(1),
                                rs.getString(2),
                                rs.getString(3),
                                rs.getString(4),
                                rs.getString(5));
                        break;
                    case 2:
                        user = new Admin(
                                rs.getInt(1),
                                rs.getString(2),
                                rs.getString(3),
                                rs.getString(4),
                                rs.getString(5));
                        break;
                    case 1:
                        user = new SuperAdmin(
                                rs.getInt(1),
                                rs.getString(2),
                                rs.getString(3),
                                rs.getString(4),
                                rs.getString(5));
                        break;
                }
            }

        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        return user;
    }

    public List<User> findAllUsers() {
        setConnection();
        Statement stmt = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM users ORDER BY user_id DESC";

        User user;
        List<User> users = new ArrayList<User>() {
        };

        try {
            stmt = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
            rs = stmt.executeQuery(sql);

            while (rs.next()) {
                switch (rs.getInt(6)){
                    case 3:
                        user = new User(
                                rs.getInt(1),
                                rs.getString(2),
                                rs.getString(3),
                                rs.getString(4),
                                rs.getString(5));
                        users.add(user);
                        break;
                    case 2:
                        user = new Admin(
                                rs.getInt(1),
                                rs.getString(2),
                                rs.getString(3),
                                rs.getString(4),
                                rs.getString(5));
                        users.add(user);
                        break;
                    case 1:
                        user = new SuperAdmin(
                                rs.getInt(1),
                                rs.getString(2),
                                rs.getString(3),
                                rs.getString(4),
                                rs.getString(5));
                        users.add(user);
                        break;
                }
            }
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
        finally {
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException sqlEx) { } // ignore

                rs = null;
            }
            if (stmt != null) {
                try {
                    stmt.close();
                } catch (SQLException sqlEx) { } // ignore

                stmt = null;
            }
        }
        return users;
    }


}