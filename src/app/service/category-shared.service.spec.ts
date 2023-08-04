import { TestBed } from '@angular/core/testing';

import { CategorySharedService } from './category-shared.service';

describe('CategorySharedService', () => {
  let service: CategorySharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorySharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
