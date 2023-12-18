import { Component } from '@angular/core';
import { Book } from '../entity/book';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  books = [
    new Book(1, 'Power of habits', 'Charles Duhigg', 30),
    new Book(2, 'Atomic Habits', 'James clear', 25),
    new Book(3, 'Hanger Games', 'Suzan Collins', 35)
  ]

}
