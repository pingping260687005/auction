import { TestBed, inject } from '@angular/core/testing';

import { StateEmitService } from './state-emit.service';

describe('StateEmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateEmitService]
    });
  });

  it('should be created', inject([StateEmitService], (service: StateEmitService) => {
    expect(service).toBeTruthy();
  }));
});
