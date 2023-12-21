import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../entity/i-user';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit, OnDestroy {

  users : IUser[] = [];
  subscription? : Subscription;

  constructor(private service : UserService){}

  ngOnDestroy(){
    this.subscription!.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.usersDataUpdated.subscribe(
      users => this.users = users
    )
    this.service.getUsers();
  }


}
