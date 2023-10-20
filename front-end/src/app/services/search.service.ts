import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { FoodDisplay } from '../components/food-display/food-display.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = 'http://localhost:8080/api/v1/food/search'; // Replace with your API URL
  private searchTermSubject = new BehaviorSubject<FoodDisplay>(
    {} as FoodDisplay
  );

  constructor(private http: HttpClient) {}

  setSearchTerm(searchTerm: FoodDisplay) {
    this.searchTermSubject.next(searchTerm);
  }

  getSearchTerm() {
    return this.searchTermSubject.asObservable();
  }

  search(searchTerm: string) {
    const requestBody = searchTerm;
    return this.http.post<FoodDisplay[]>(this.apiUrl, requestBody);
  }
}
