package com.marius.calorie.food;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/food")
public class FoodSearchController {

    private final FoodSearchService foodService;

    @PostMapping("/search")
    public ResponseEntity<List<Food>> searchFood(@RequestBody String body){
        return ResponseEntity.ok(foodService.searchFood(body));
    }
}
