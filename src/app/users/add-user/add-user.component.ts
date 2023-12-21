import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  /*userForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })*/

  userForm = this.fb.group({
    name : ['', Validators.required],
    email : ['', [Validators.required, Validators.email]],
    password : ['', Validators.required]
  })

  constructor(private service : UserService,
    private router : Router,
    private fb : FormBuilder){}

  addUser(){
    this.service.addUser(
      this.userForm.value.name!,
      this.userForm.value.email!,
      this.userForm.value.password!);
    this.router.navigate(['/users'])
  }



}
