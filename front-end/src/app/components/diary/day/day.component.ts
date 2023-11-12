import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPopUpComponent } from '../add-pop-up/add-pop-up.component';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent {
  title = 'angular-material';
  constructor(private dialogRef: MatDialog) {}

  openDialog() {
    this.dialogRef.open(AddPopUpComponent, {});
  }
}
