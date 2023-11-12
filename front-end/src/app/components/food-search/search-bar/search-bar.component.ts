import { Component, EventEmitter, Output } from '@angular/core';
import { Food } from '../../../models/food.model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchTerm: string = '';
  showSuggestions: boolean = false;
  suggestionList: Food[] = [];

  constructor(private searchService: SearchService) {}

  onSubmit() {}
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
    this.searchTerm = suggestion.foodName; // Set the selected suggestion as the search term
    this.showSuggestions = false; // Hide suggestions
    this.searchService.setSearchTerm(suggestion); // Trigger the search with the selected suggestion
  }
}
