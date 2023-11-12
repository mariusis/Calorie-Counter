import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSearchBarComponent } from './add-search-bar.component';

describe('AddSearchBarComponent', () => {
  let component: AddSearchBarComponent;
  let fixture: ComponentFixture<AddSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSearchBarComponent]
    });
    fixture = TestBed.createComponent(AddSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
