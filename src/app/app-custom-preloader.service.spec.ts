import { TestBed } from '@angular/core/testing';

import { AppCustomPreloaderService } from './app-custom-preloader.service';

describe('AppCustomPreloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppCustomPreloaderService = TestBed.get(AppCustomPreloaderService);
    expect(service).toBeTruthy();
  });
});
