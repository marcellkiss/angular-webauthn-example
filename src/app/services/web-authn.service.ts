import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { ServerMockService } from './server-mock.service';

@Injectable({
  providedIn: 'root'
})
export class WebAuthnService {

  constructor(private serverMockService: ServerMockService) { }

  createCredential(user: User): Promise<CredentialType> {
    const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions = {
      // Challenge shoulda come from the server
      challenge: this.serverMockService.getChallenge(),
      rp: {
        name: 'WebAuthn Test',
        // id: 'localhost:4200',
      },
      user: {
        // Some user id coming from the server
        id: Uint8Array.from(user.id, c => c.charCodeAt(0)),
        name: user.email,
        displayName: user.email,
      },
      pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
      authenticatorSelection: {
        authenticatorAttachment: 'platform',
      },
      timeout: 60000,
      attestation: 'direct'
    };

    return navigator.credentials.create({
      publicKey: publicKeyCredentialCreationOptions,
    });
  }

  getAssertion(user: User): Promise<CredentialType> {
    const credentialRequestOptions: PublicKeyCredentialRequestOptions = {
      challenge: this.serverMockService.getChallenge(),
      allowCredentials: user.credentials.map(c => {
        return { type: 'public-key', id: c.credentialId };
      }),
    };

    return navigator.credentials.get({
      publicKey: credentialRequestOptions,
    });
  }
}
