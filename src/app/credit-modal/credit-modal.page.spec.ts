import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditModalPage } from './credit-modal.page';

describe('CreditModalPage', () => {
  let component: CreditModalPage;
  let fixture: ComponentFixture<CreditModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
