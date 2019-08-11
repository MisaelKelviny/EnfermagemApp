import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisinhaPage } from './camisinha.page';

describe('CamisinhaPage', () => {
  let component: CamisinhaPage;
  let fixture: ComponentFixture<CamisinhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamisinhaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisinhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
