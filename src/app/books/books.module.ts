import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { ListBooksComponent } from './list-books/list-books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ListBooksComponent,
    EditBookComponent,
    AddBookComponent,
    DetailBookComponent,
    BookComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
  ]
})
export class BooksModule { }
