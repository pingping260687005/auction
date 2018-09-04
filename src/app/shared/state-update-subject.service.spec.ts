import { TestBed, inject } from '@angular/core/testing';

import { StateUpdateSubjectService } from './state-update-subject.service';

describe('StateUpdateSubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateUpdateSubjectService]
    });
  });

  it('should be created', inject([StateUpdateSubjectService], (service: StateUpdateSubjectService) => {
    expect(service).toBeTruthy();
  }));
});
