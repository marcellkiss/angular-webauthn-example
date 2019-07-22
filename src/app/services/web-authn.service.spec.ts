import { TestBed } from '@angular/core/testing';

import { WebAuthnService } from './web-authn.service';

describe('WebAuthnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebAuthnService = TestBed.get(WebAuthnService);
    expect(service).toBeTruthy();
  });
});
