package com.marius.calorie.food;

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
@Table(name = "food_data")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "food_id")
    private int foodId;

    @Column(name = "food_name")
    private String foodName;

    @Column(name = "measure")
    private String measure;

    @Column(name = "grams")
    private double grams;

    @Column(name = "calories")
    private double calories;

    @Column(name = "protein")
    private double protein;

    @Column(name = "fat")
    private double fat;

    @Column(name = "sat_fat")
    private double satFat;

    @Column(name = "fiber")
    private double fiber;

    @Column(name = "carbs")
    private double carbs;

    @Column(name = "category")
    private String category;
}