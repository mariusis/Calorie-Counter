package com.marius.calorie.foodEntry;

import com.marius.calorie.food.Food;
import com.marius.calorie.food.FoodRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FoodEntryService {

    private final FoodEntryRepository foodEntryRepository;
    private final FoodRepository foodRepository;


    public boolean saveEntry(FoodEntryDTO foodEntryDTO) {
        try {
            FoodEntry foodEntry = FoodEntry.builder()
                    .quantity(foodEntryDTO.getQuantity())
                    .foodId(foodEntryDTO.getFood().getFoodId())
                    .userId(foodEntryDTO.getUserId())
                    .build();
            this.foodEntryRepository.save(foodEntry);
            return true;
        }catch (Exception e) {
            return false;
        }
    }

    public List<FoodEntryDTO> getUserEntries(int userId) {
        List<FoodEntry> foodEntries = foodEntryRepository.findAllByUserId(userId);

        // Use stream and map to transform FoodEntry entities to FoodEntryDTO
        List<FoodEntryDTO> foodEntryDTOs = foodEntries.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());

        return foodEntryDTOs;
    }

    private FoodEntryDTO convertToDTO(FoodEntry foodEntry) {
        Food food = foodRepository.findById(foodEntry.getFoodId())
                .orElseThrow(() -> new RuntimeException("Food not found with id: " + foodEntry.getFoodId()));

        return FoodEntryDTO.builder()
                .quantity(foodEntry.getQuantity())
                .food(food)
                .userId(foodEntry.getUserId())
                .build();
    }
}
