import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  friends: User [];
  constructor() {
    const usuario1: User = {
      nick: 'Sebastian',
      age: 21,
      email: 'sebasegura97@gmail.com',
      friend: false,
      uid: 1,
    };
    const usuario2: User = {
      nick: 'matias',
      age: 21,
      email: 'matias@gmail.com',
      friend: true,
      uid: 1,
    };
    const usuario3: User = {
      nick: 'joaquin',
      age: 21,
      email: 'joaquin@gmail.com',
      friend: true,
      uid: 1,
    };
    const usuario4: User = {
      nick: 'ella',
      age: 21,
      email: 'ella@gmail.com',
      friend: false,
      uid: 1,
    };
    const users: User[] = [
      usuario1, usuario2, usuario3, usuario4
    ];
    this.friends = users;
   }


  ngOnInit() {
  }

}
