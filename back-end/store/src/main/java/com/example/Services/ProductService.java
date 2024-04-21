package com.example.Services;

import com.example.Entities.Product;
import com.example.Repositories.ProductRepository;
import com.example.Services.DAOs.ProductDAO;

import java.util.List;

public class ProductService implements ProductDAO {
    private ProductRepository productRepository = new ProductRepository();
    @Override
    public void add(Product product) { 

    }

    @Override
    public void edit(int id) {

    }

    @Override
    public void delete(int id) {

    }
    @Override
    public Product findByName(String name) {
        if (productRepository.findByName(name) != null){
            return productRepository.findByName(name);
        } else
            return null;
    }
    @Override
    public Product findByProductId(int id) {
        return null;
    }

    @Override
    public List<Product> findAllByCategory(String category) {
        return null;
    }

    @Override
    public List<Product> findAllDiscountedProducts() {
        return null;
    }
}
