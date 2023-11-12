import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/food-search/navbar/navbar.component';
import { SearchBarComponent } from './components/food-search/search-bar/search-bar.component';
import { FoodDisplayComponent } from './components/food-search/food-display/food-display.component';
import { RouterModule } from '@angular/router';
import { FoodSearchComponent } from './components/food-search/food-search/food-search.component';
import { RegisterComponent } from './auth/register/register.component';
import { DiaryComponent } from './components/diary/diary/diary.component';
import { DayComponent } from './components/diary/day/day.component';
import { AddPopUpComponent } from './components/diary/add-pop-up/add-pop-up.component';
import { AddSearchBarComponent } from './components/diary/add-search-bar/add-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SearchBarComponent,
    FoodDisplayComponent,

    FoodSearchComponent,
    RegisterComponent,
    DiaryComponent,
    DayComponent,
    AddPopUpComponent,
    AddSearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
