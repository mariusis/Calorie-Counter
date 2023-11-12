package com.marius.calorie.food;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FoodRepository extends JpaRepository<Food,Integer> {

    public List<Food> findByFoodNameContaining(String food);
    public Food findByFoodId(int foodId);
}
