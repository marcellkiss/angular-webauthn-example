import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ServerMockService {

  constructor(private userService: UserService) { }

  getUsers() {
    return this.userService.getUsers();
  }

  updateUser(user: User) {
    this.removeUser(user.email);
    this.addUser(user);
  }

  addUser(user: User) {
    user.id = '' + Math.floor(Math.random() * 10000000);
    this.userService.addUser(user);
    return user;
  }

  getUser(email: string) {
    return this.userService.getUser(email);
  }

  removeUser(email: string) {
    return this.userService.removeUser(email);
  }

  getChallenge() {
    return Uint8Array.from('someChallengeIsHereComOn', c => c.charCodeAt(0));
  }
}
