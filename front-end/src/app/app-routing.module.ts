import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FoodSearchComponent } from './components/food-search/food-search/food-search.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DiaryComponent } from './components/diary/diary/diary.component';
import { AuthGuard } from './auth/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: FoodSearchComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'diary',
    component: DiaryComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
