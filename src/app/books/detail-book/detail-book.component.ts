import { Component, Input } from '@angular/core';
import { Book } from '../entity/book';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent {
  @Input() book?: Book;

}
