package com.example.Services.DAOs;

import com.example.Entities.*;

import java.util.List;

public interface ProductDAO {
    void add(Product product);
    void edit(int id);
    void delete(int id);
    Product findByProductId(int id);
    Product findByName(String name);
    List<Product> findAllByCategory(String category);
    List<Product> findAllDiscountedProducts();
}
