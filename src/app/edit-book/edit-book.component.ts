import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../entity/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book? : Book;

  constructor(
    private activatedRoute : ActivatedRoute,
    private service : BookService,
    private router : Router){}

  editBook(f : NgForm){
    this.service.editBook(this.book!);
    this.router.navigate(['/list']);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        this.book = this.service.getBookById(+params['id']);
        console.log(this.book);
      }
    )
  }
}
