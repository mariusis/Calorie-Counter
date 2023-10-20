import { Component, EventEmitter, Output } from '@angular/core';
import { FoodDisplay } from '../food-display/food-display.model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchTerm: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  showSuggestions: boolean = false;
  suggestionList: FoodDisplay[] = [];

  constructor(private searchService: SearchService) {}

  onSubmit() {}
  onSearchInput() {
    if (this.searchTerm.length >= 3) {
      this.showSuggestions = true;
      this.searchService
        .search(this.searchTerm)
        .subscribe((data: FoodDisplay[]) => {
          this.suggestionList = data;
        });
      console.log(this.suggestionList);
    } else {
      this.showSuggestions = false;
      this.suggestionList = [];
    }
  }

  selectSuggestion(suggestion: FoodDisplay) {
    this.searchTerm = suggestion.foodName; // Set the selected suggestion as the search term
    this.showSuggestions = false; // Hide suggestions
    this.searchService.setSearchTerm(suggestion); // Trigger the search with the selected suggestion
  }
}
