import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamentoPagePage } from './tratamento-page.page';

describe('TratamentoPagePage', () => {
  let component: TratamentoPagePage;
  let fixture: ComponentFixture<TratamentoPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamentoPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamentoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
