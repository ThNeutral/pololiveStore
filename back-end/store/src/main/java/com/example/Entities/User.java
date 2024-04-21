package com.example.Entities;

public class User {
    private int id;
    private String name;
    private String fname;
    private String lname;
    private String email;
    private String password;
    private String role = "CUSTOMER";

    public User(int id, String fname, String lname, String email, String password) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.name = fname + " " + lname;
    }
    public User(String fname, String lname, String email, String password) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.name = fname + " " + lname;
    }
    public void setId(int id) {
        this.id = id;
    }
    public void setFname(String fname) {
        this.fname = fname;
    }
    public void setLname(String lname) {
        this.lname = lname;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password){
        this.password = password;
    }
    //public void setRole(String role) {this.role = role;}
    public int getId() {
        return id;
    }
    public String getName() {return name;}
    public String getFname(){
        return fname;
    }

    public String getLname() {
        return lname;
    }

    public String getEmail() {
        return email;
    }
    public String getRole() {
        return role;
    }

    public String getPassword() {
        return password;
    }
    @Override
    public String toString(){
        return "{ID = " + id + ", Name = " + fname + " " + lname + ", Email = " + email + ", Role = "  + role + "}";
    }
}
