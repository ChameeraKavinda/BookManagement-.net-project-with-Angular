import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from './services/book.service';
import { Book } from './models/book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {

  books: Book[] = [];

  newBook: Omit<Book, 'id'> = {
    title: '',
    author: '',
    publisher: '',
    createdDate: ''
  };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => this.books = data,
      error: (err) => console.error(err)
    });
  }

  addBook(): void {
    this.newBook.createdDate = new Date().toISOString();
    this.bookService.addBook(this.newBook).subscribe({
      next: () => {
        this.loadBooks();
        this.newBook = { title: '', author: '', publisher: '', createdDate: '' };
      },
      error: (err) => console.error(err)
    });
  }

  deleteBook(id: number | undefined): void {
    if (id == null) {
      return;
    }

    this.bookService.deleteBook(id).subscribe({
      next: () => this.loadBooks(),
      error: (err) => console.error(err)
    });
  }
}