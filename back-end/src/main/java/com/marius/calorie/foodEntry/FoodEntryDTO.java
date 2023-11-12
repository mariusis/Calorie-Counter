package com.marius.calorie.foodEntry;

import com.marius.calorie.food.Food;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class FoodEntryDTO {

    private double quantity;

    private Food food;
    private int userId;
}
