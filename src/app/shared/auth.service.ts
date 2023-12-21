import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDTO } from './auth-dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:3000/login";
  options = {headers : new HttpHeaders(
    {
      'content-type' : "application/json",
    }
  )}

  constructor(private http : HttpClient,
    private router : Router) { }

  login(email : string, password : string){
    this.http.post<AuthDTO>(this.url,
      {email, password},
      this.options
    ).subscribe({
      next : result => {
        window.localStorage.setItem("accessToken", result.accessToken);
        this.router.navigate(['/books'])
      },
      error : err => console.log(err.status + " - " + err.statusText),
      complete : ()=>console.log("Complete!...")
    })
  }

  logout(){
    window.localStorage.removeItem("accessToken");
    this.router.navigate(['/login']);
  }

  isAuthenticated() : boolean{
    return window.localStorage.getItem("accessToken") !== null
  }
}
