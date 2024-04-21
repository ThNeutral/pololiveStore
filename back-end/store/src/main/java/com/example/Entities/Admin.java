package com.example.Entities;

public class Admin extends User{
    private String role = "ADMIN";
    public Admin(int id, String fname, String lname, String email, String password){
        super(id, fname, lname, email, password);
    }
    @Override
    public String getRole() {
        return role;
    }
    @Override
    public String toString(){
        return "{ID = " + getId() + ", Name = " + getFname() + " " + getLname() + ", Email = " + getEmail() + ", Role = "  + role + "}";
    }
}
