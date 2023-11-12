package com.marius.calorie.foodEntry;

import com.marius.calorie.food.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodEntryRepository extends JpaRepository<FoodEntry,Integer> {

    public List<FoodEntry> findAllByUserId(int userId);
}
