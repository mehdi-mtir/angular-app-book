import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from './list-books/list-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { authGuard } from '../shared/auth.guard';

const routes: Routes = [
  {path:'list', component : ListBooksComponent, canActivate : [authGuard]},
  {path:'add', component : AddBookComponent, canActivate : [authGuard]},
  {path:'edit/:id', component: EditBookComponent, canActivate : [authGuard]},
  {path:'', redirectTo:'list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
