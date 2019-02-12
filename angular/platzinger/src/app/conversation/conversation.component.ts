import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId: any;
  friends: User[];
  friend: User;
  price = 13244.1234;
  today = Date.now();
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService ) {
    this.friends = this.userService.getFriends();
    this.friendId = this.activatedRoute.snapshot.params.uid;
    this.friend = this.friends.find( (item) => item.uid == this.friendId);
    console.log(this.friend);
   }

  ngOnInit() {
  }

}
