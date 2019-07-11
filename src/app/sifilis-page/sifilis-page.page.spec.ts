import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SifilisPagePage } from './sifilis-page.page';

describe('SifilisPagePage', () => {
  let component: SifilisPagePage;
  let fixture: ComponentFixture<SifilisPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SifilisPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SifilisPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
