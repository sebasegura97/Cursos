import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];

  constructor() {
    const usuario1: User = {
      nick: 'Sebastian',
      age: 21,
      email: 'sebasegura97@gmail.com',
      friend: false,
      uid: 1,
      status: 'online',
    };
    const usuario2: User = {
      nick: 'matias',
      age: 21,
      email: 'matias@gmail.com',
      friend: true,
      uid: 2,
      status: 'offline',
    };
    const usuario3: User = {
      nick: 'joaquin',
      age: 21,
      email: 'joaquin@gmail.com',
      friend: true,
      uid: 3,
      status: 'away',
    };
    const usuario4: User = {
      nick: 'ella',
      age: 21,
      email: 'ella@gmail.com',
      friend: false,
      uid: 4,
      status: 'busy',
    };
    const users: User[] = [
      usuario1, usuario2, usuario3, usuario4
    ];
    this.friends = users;
   }
   getFriends() {
     return this.friends;
   }
}
