import { Injectable } from '@angular/core';
import { Book } from '../entity/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = [
    new Book(1, 'Power of habits', 'Charles Duhigg', 30),
    new Book(2, 'Atomic Habits', 'James clear', 25),
    new Book(3, 'Hanger Games', 'Suzan Collins', 35)
  ]

  constructor() { }

  getBooks(){
    return [...this.books];
  }

  getBookById(id : number): Book | undefined{
    return this.books.find(book=>book.id === id)
  }

  addBook(title : string, author : string, price : number){
    const book = new Book(
      this.books[this.books.length - 1].id + 1,
      title,
      author,
      price
    );
    this.books = [...this.books, book];
  }

  editBook(book : Book){
    this.books = this.books.map(
      //b=>(b.id === book.id)?book:b
      b=>{
        if(b.id === book.id)
          return book
        else
          return b
      }
    )
  }

  deleteBook(id : number) : Book[]{
    this.books = this.books.filter(
      book=>book.id !== id
    )
    return this.books
  }


}
