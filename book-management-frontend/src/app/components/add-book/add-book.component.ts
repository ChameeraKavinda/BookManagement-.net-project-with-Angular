import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-book.component.html'
})
export class AddBookComponent {

  book = { title: '', author: '', isbn: '' };

  constructor(private bookService: BookService, private router: Router) {}

  saveBook() {
    this.bookService.addBook(this.book).subscribe(() => {
      alert("Book Added Successfully");
      this.router.navigate(['/']);
    });
  }

}