import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Food } from 'src/app/models/food.model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css'],
})
export class AddPopUpComponent {
  food: Food = {} as Food;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.getSearchTerm().subscribe((data) => {
      this.food = data;
    });
  }
}
