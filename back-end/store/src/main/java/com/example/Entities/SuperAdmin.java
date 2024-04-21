package com.example.Entities;

public class SuperAdmin extends Admin{
    private String role = "SUPER_ADMIN";
    public SuperAdmin(int id, String fname, String lname, String email, String password){
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
