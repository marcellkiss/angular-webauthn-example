import { Component } from '@angular/core';
import { User } from './interfaces/user';
import { ServerMockService } from './services/server-mock.service';
import { WebAuthnService } from './services/web-authn.service';
import * as CBOR from './utils/cbor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-web-authn';
  users: User[];
  email = 'a@a.com';
  password = 'aaa';
  // signupForm: FormGroup;

  constructor(private serverMockService: ServerMockService, private webAuthnService: WebAuthnService) {
    this.users = serverMockService.getUsers();

    // this.signupForm = fb.group({
    //   email: ['a@a.com', [Validators.required, Validators.email]],
    //   password: ['aaa', [Validators.required]],
    //   confirmPassword: ['aaa', [Validators.required]],
    // });
  }

  removeUser(email: string) {
    this.serverMockService.removeUser(email);
    this.users = this.serverMockService.getUsers();
  }

  signup() {
    console.log('SIGNUP');

    // Save into the 'DB'
    const prevUser = this.serverMockService.getUser(this.email);
    if (prevUser) {
      alert('🚫 User already exists with this email address');
      return;
    }
    const user: User = this.serverMockService.addUser({ email: this.email, password: this.password, credentials: [] });
    this.users = this.serverMockService.getUsers();

    // Ask for WebAuthn Auth method
    if (confirm('Would you like to use your fingerprint for later logins?')) {
      this.createCredential(user);
    }
  }

  createCredential(user: User) {
    console.log('[createCredential]');
    // Creating credentials
    this.webAuthnService.createCredential(user).then((credential: PublicKeyCredential) => {
      console.log('credentials.create RESPONSE', credential);

      // decode the clientDataJSON into a utf-8 string
      const utf8Decoder = new TextDecoder('utf-8');
      const decodedClientData = utf8Decoder.decode(credential.response.clientDataJSON);

      // TODO: create interface for this response
      const clientDataObj = JSON.parse(decodedClientData);
      console.log('!!!clientDataObj!!!', clientDataObj);

      // TODO: create interface for this response
      const decodedAttestationObj = CBOR.decode((credential.response as any).attestationObject);
      console.log('!!!decodedAttestationObj!!!', decodedAttestationObj);

      const { authData } = decodedAttestationObj;

      // get the length of the credential ID
      const dataView = new DataView(new ArrayBuffer(2));
      const idLenBytes = authData.slice(53, 55);
      idLenBytes.forEach((value, index) => dataView.setUint8(index, value));
      const credentialIdLength = view.getUint16();

      // get the credential ID
      const credentialId = authData.slice(55, credentialIdLength);

      // get the public key object
      const publicKeyBytes = authData.slice(55 + credentialIdLength);

      // the publicKeyBytes are encoded again as CBOR
      const publicKeyObject = CBOR.decode(publicKeyBytes.buffer);

      // TODO: validate and store credentials
      console.log('!!!publicKeyObject!!!', publicKeyObject);

    }).catch((error) => {
      console.log('credentials.create ERROR', error);
    });
  }

  signin() {
    console.log('[signin]');
    const user = this.serverMockService.getUsers().find(u => u.email === this.email && u.password === this.password );
    if (user) {
      alert('✅ Congrats! Authentication went fine!');
    } else {
      alert('🚫 Sorry :( Invalid credentials!');
    }
  }

  webAuthSignin() {
    const user = this.serverMockService.getUser(this.email);
    this.webAuthnService.getAssertion(user).then((response) => {
      // TODO: validate attestion
      alert('✅ Congrats! Authentication went fine!');
      console.log('SUCCESSFULLY GOT AN ASSERTION!', response);
    })
    .catch((error) => {
      alert('🚫 Sorry :( Invalid credentials!');
      console.log('FAIL', error);
    });
  }
}
