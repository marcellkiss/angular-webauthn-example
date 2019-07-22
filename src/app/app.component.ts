import { Component } from '@angular/core';
import { User } from './interfaces/user';
import { ServerMockService } from './services/server-mock.service';
import { WebAuthnService } from './services/web-authn.service';

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
    this.webAuthnService.createCredential(user).then((response) => {
      console.log('credentials.create RESPONSE', response);
      // TODO: validate and store credentials

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
