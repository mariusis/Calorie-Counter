import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchTerm: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  showSuggestions: boolean = false; // New property to control suggestion visibility
  suggestionList: string[] = []; // Array to hold the suggestions

  onSearchInput() {
    // Implement your suggestion logic here
    // For this example, we'll show suggestions when the search term is at least 3 characters long
    if (this.searchTerm.length >= 3) {
      this.showSuggestions = true;
      // Replace the following line with your suggestion generation logic
      this.suggestionList = ['Suggestion 1', 'Suggestion 2', 'Suggestion 3'];
    } else {
      this.showSuggestions = false;
      this.suggestionList = [];
    }
  }

  selectSuggestion(suggestion: string) {
    this.searchTerm = suggestion; // Set the selected suggestion as the search term
    this.showSuggestions = false; // Hide suggestions
    this.search.emit(this.searchTerm); // Trigger the search with the selected suggestion
  }
}
