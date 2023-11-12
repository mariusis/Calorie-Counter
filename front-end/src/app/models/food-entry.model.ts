import { Food } from './food.model';

export interface FoodEntry {
  food: Food;
  quantity: number;
  userId: number;
}
