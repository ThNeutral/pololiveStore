package com.example.Audit;

import com.example.Entities.Category;
import com.example.Entities.Product;
import com.example.Services.CategoryService;

import java.util.ArrayList;
import java.util.List;

public abstract class Audit {
    public static List<Category> categoryAudit(Product product) {
        CategoryService categoryService = new CategoryService();
        List<Category> mismatchedCategories = new ArrayList<>();

        //Loop retrieves each PRODUCT CATEGORY to be compared
        for (Category productCategory : product.getCategory())
        {
            //Loop compares the product category with EXISTING categories
            for (Category category : categoryService.findAllCategories())
            {
                //If the product category != an existing category => It will be added in the list of mismatched categories
                if (!productCategory.equals(category.getCategory()))
                {
                    mismatchedCategories.add(category);
                }
            }
        }
        return mismatchedCategories;
    }
}
