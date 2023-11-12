package com.marius.calorie.foodEntry;

import com.marius.calorie.food.Food;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "food_entries")
public class FoodEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "food_entry_id")
    private int foodEntryId;

    private double quantity;

    private int foodId;
    private int userId;
}
