import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongenitaPagePage } from './congenita-page.page';

describe('CongenitaPagePage', () => {
  let component: CongenitaPagePage;
  let fixture: ComponentFixture<CongenitaPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongenitaPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongenitaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
