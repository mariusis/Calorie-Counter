package com.marius.calorie.food;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodSearchService {

    private final FoodRepository foodRepository;

    public FoodSearchService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public List<Food> searchFood(String foodName){
             return foodRepository.findByFoodNameContaining(foodName);

    }


}
