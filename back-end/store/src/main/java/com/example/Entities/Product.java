package com.example.Entities;

import java.util.ArrayList;

public class Product {
    private int id;
    private String name;
    private String description;
    private int amount;
    private float price;
    private String image;
    private ArrayList<Category> categories;

    public Product(int id, String name, String description, int amount, float price, String image, ArrayList<Category> categories){
        this.id = id;
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.image = image;
        this.price = price;
        this.categories = categories;
    }
    public void setId(int id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setAmount(int amount) {
        this.amount = amount;
    }
    public void setPrice(float price) {
        this.price = price;
    }
    public void setImage(String image) {
        this.image = image;
    }
    public void setProductType(ArrayList<Integer> category) {
        this.categories = categories;
    }
    public int getId() {return id;}
    public String getName() {return name;}
    public String getDescription() {return description;}
    public int getAmount() {return amount;}
    public float getPrice() {return price;}
    public String getImage() {return image;}
    public ArrayList<Category> getCategory() {return categories;}

    @Override
    public String toString(){
        return "Id = " + id + "\t\t" + "Name = " + name
                + "\t\t" + "Amount = " + amount + "\t\t" + "Category = " + categories;
    }
}