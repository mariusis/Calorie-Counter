import { Component, Input } from '@angular/core';
import { FoodDisplay } from './food-display.model';
@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css'],
})
export class FoodDisplayComponent {
  foodDisplay: FoodDisplay = {
    name: 'Sample Food',
    category: 'Sample Category',
    grams: 100,
    calories: 200,
    protein: 10,
    fat: 5,
    saturatedFat: 2,
    fiber: 3,
    carbs: 20,
  };
}
