import { TestBed } from '@angular/core/testing';

import { MyLibraryLibService } from './my-library-lib.service';

describe('MyLibraryLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLibraryLibService = TestBed.get(MyLibraryLibService);
    expect(service).toBeTruthy();
  });
});
