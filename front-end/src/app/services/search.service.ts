import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = 'http://localhost:8080/api/v1/food/search'; // Replace with your API URL
  private searchTermSubject = new BehaviorSubject<Food>({} as Food);

  constructor(private http: HttpClient) {}

  setSearchTerm(searchTerm: Food) {
    this.searchTermSubject.next(searchTerm);
  }

  getSearchTerm() {
    return this.searchTermSubject.asObservable();
  }

  search(searchTerm: string) {
    const requestBody = searchTerm;
    return this.http.post<Food[]>(this.apiUrl, requestBody);
  }
}
