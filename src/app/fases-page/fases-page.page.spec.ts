import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasesPagePage } from './fases-page.page';

describe('FasesPagePage', () => {
  let component: FasesPagePage;
  let fixture: ComponentFixture<FasesPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasesPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
