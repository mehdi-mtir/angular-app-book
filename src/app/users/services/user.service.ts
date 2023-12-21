import { Injectable } from '@angular/core';
import { IUser } from '../entity/i-user';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users : IUser[] = [];
  private url = "http://localhost:3000/users";
  options = {headers : new HttpHeaders(
    {
      'content-type' : "application/json",
    }
  )}

  usersDataUpdated = new Subject<IUser[]>();

  constructor(private httpClient : HttpClient) { }

  getUsers(){
    this.httpClient.get<IUser[]>(this.url).subscribe(
      users => {
        this.users = users;
        this.usersDataUpdated.next(this.users);
      }
    )
  }

  addUser(name : string, email : string, password : string){
    this.httpClient.post<IUser>(
      this.url,
      {name, email, password},
      this.options
    ).subscribe(
      user => {
        this.users.push(user);
        this.usersDataUpdated.next(this.users);
      }
    )
  }
}
