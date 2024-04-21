package com.example.Repositories.DAOs;

import com.example.Entities.Product;

import java.util.List;
public interface ProductRepositoryDAO {
    String add(Product product);
    String delete(int id);
    Product findById(int id);
    Product findByName(String name);
    List<Product> findAllByDescOrder();
    List<Product> findAllByCategory(String category);

}
