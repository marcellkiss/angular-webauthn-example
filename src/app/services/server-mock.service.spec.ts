import { TestBed } from '@angular/core/testing';

import { ServerMockService } from './server-mock.service';

describe('ServerMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerMockService = TestBed.get(ServerMockService);
    expect(service).toBeTruthy();
  });
});
