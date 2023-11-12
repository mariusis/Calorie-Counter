import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../models/food.model';
import { FoodEntry } from '../models/food-entry.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddFoodService {
  private apiUrl = 'http://localhost:8080/api/v1/foodEntry/save'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  add(foodEntry: FoodEntry): Observable<any> {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const requestBody = foodEntry;
    return this.http.post<Food[]>(this.apiUrl, requestBody, { headers });
  }
}
