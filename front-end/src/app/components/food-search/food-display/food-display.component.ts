import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from '../../../models/food.model';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css'],
})
export class FoodDisplayComponent {
  foodDisplay: Food = {} as Food;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.getSearchTerm().subscribe((data) => {
      this.foodDisplay = data;
    });
  }
}
