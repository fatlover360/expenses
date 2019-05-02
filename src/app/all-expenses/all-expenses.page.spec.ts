import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExpensesPage } from './all-expenses.page';

describe('AllExpensesPage', () => {
  let component: AllExpensesPage;
  let fixture: ComponentFixture<AllExpensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllExpensesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
