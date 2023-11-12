import { Component } from '@angular/core';
import { Food } from '../../../models/food.model';
import { AddFoodService } from 'src/app/services/add-food.service';
import { SearchService } from 'src/app/services/search.service';
import { MatDialog } from '@angular/material/dialog';
import { FoodEntry } from 'src/app/models/food-entry.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-search-bar',
  templateUrl: './add-search-bar.component.html',
  styleUrls: ['./add-search-bar.component.css'],
})
export class AddSearchBarComponent {
  searchTerm: string = '';
  showSuggestions: boolean = false;
  suggestionList: Food[] = [];

  selectedSuggestion: Food = {} as Food; // Assuming the type of suggestionList items is any
  quantity: number = 0.0;
  userId: any = -1;
  constructor(
    private searchService: SearchService,
    private addFoodService: AddFoodService,
    private dialogRef: MatDialog,
    private authService: AuthService
  ) {}

  onSubmit() {
    const token = localStorage.getItem('jwt');

    if (token != null) {
      this.authService.getUserId(token).subscribe(
        (response) => {
          // This block will be executed when the response is received
          this.userId = response;

          // Move the following code into this block
          this.addFoodService
            .add({
              food: this.selectedSuggestion,
              quantity: this.quantity,
              userId: this.userId,
            } as FoodEntry)
            .subscribe((success) => {
              console.log(success);
            });
          this.dialogRef.closeAll();
        },
        (error) => {
          // Handle error appropriately
          console.error('Error getting userId:', error);
        }
      );
    }
  }
  onSearchInput() {
    if (this.searchTerm.length >= 3) {
      this.showSuggestions = true;
      this.searchService.search(this.searchTerm).subscribe((data: Food[]) => {
        this.suggestionList = data;
      });
    } else {
      this.showSuggestions = false;
      this.suggestionList = [];
    }
  }

  selectSuggestion(suggestion: Food) {
    this.selectedSuggestion = suggestion;
  }
}
