import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPagePage } from './question-page.page';

describe('QuestionPagePage', () => {
  let component: QuestionPagePage;
  let fixture: ComponentFixture<QuestionPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
