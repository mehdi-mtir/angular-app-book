import { Injectable } from '@angular/core';
import { Book } from '../entity/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books : Book[] = [];
  private url = "http://localhost:3000/books";
  options = {headers : new HttpHeaders(
    {
      'content-type' : "application/json",
    }
  )}

  constructor(private httpClient : HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.url);
    //return [...this.books];
  }



  addBook(
      title : string,
      author : string,
      price : number): Observable<Book>{
    /*const book = new Book(
      this.books[this.books.length - 1].id + 1,
      title,
      author,
      price
    );
    this.books = [...this.books, book];*/
    return this.httpClient.post<Book>(this.url,
      {
        title,
        author,
        price
      },
      this.options
    );
  }

  getBookById(id : number): Observable<Book>{
    //return this.books.find(book=>book.id === id)

    return this.httpClient.get<Book>(this.url + "/" + id)
  }

  editBook(book : Book) : Observable<Book>{
    return this.httpClient.put<Book>(
      `${this.url}/${book.id}`,
      book,
      this.options)
      /*this.books = this.books.map(
      //b=>(b.id === book.id)?book:b
      b=>{
        if(b.id === book.id)
          return book
        else
          return b
      }
    )*/

  }

  deleteBook(id : number) : Observable<Object>{
    /*
    this.books = this.books.filter(
      book=>book.id !== id
    )
    return this.books
    */
    return this.httpClient.delete<Object>(`${this.url}/${id}`)
  }


}
