import { TestBed } from '@angular/core/testing';

import { OpenDialogService } from './open-dialog.service';

describe('OpenDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenDialogService = TestBed.get(OpenDialogService);
    expect(service).toBeTruthy();
  });
});
