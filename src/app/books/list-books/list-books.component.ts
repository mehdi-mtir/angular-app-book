import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../entity/book';
import { BookService } from '../services/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit, OnDestroy {
  books : Book[] = []
  filteredBooks? : Book[];
  activeBook? : Book;
  subscription? : Subscription

  constructor(private service : BookService){}

  searchBook(search : string){
    this.filteredBooks = this.books.filter(
      b=>b.title.toLowerCase().includes(search.toLowerCase())
    )
  }

  showDetail(book : Book | undefined){
    this.activeBook = book;
  }

  deleteBook(id : number){
    if(confirm("Etes-vous sûre de vouloir supprimer le livre?"))
      this.service.deleteBook(id).subscribe(
        ()=> {
          this.books = this.books.filter(book=>book.id !== id);
          this.filteredBooks = this.filteredBooks!.filter(book=>book.id !== id);
          console.table(this.books);
        }
      )
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.getBooks().subscribe(
      (books)=>{
        this.books = books;
        this.filteredBooks = [...this.books];
      }
    )

  }



}
