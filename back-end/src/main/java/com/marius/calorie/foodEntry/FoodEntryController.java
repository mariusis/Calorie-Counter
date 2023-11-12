package com.marius.calorie.foodEntry;

import com.marius.calorie.food.Food;
import com.marius.calorie.food.FoodSearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/foodEntry")
public class FoodEntryController {

    private final FoodEntryService foodEntryService;

    @PostMapping("/save")
    public ResponseEntity<Boolean> searchsearchFood(@RequestBody FoodEntryDTO body){
        return ResponseEntity.ok(foodEntryService.saveEntry(body));
    }

    @GetMapping("/get")
    public ResponseEntity<List<FoodEntryDTO>> getEntries(@RequestParam int userID){
        return ResponseEntity.ok(foodEntryService.getUserEntries(userID));
    }
}
