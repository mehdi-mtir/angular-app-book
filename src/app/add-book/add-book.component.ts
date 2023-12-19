import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(
    private service : BookService,
    private router : Router){}
  /*addBook(title : string, author : string, price : string){
    console.log(`${title} - ${author} - ${price}`)
  }*/
  addBook(f: NgForm){
    //console.log(f);
    this.service.addBook(f.value.title, f.value.author, f.value.price);
    this.router.navigate(['/list']);
  }

}
