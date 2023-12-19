import { Component, OnInit } from '@angular/core';
import { Book } from '../entity/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books : Book[] = []
  filteredBooks? : Book[];
  activeBook? : Book;

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
      this.books = this.service.deleteBook(id);
  }

  ngOnInit(): void {
    this.books = this.service.getBooks();
    this.filteredBooks = [...this.books];
  }



}
