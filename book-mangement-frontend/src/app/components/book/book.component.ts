import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];

  newBook: Book = {
    title: '',
    author: '',
    publisher: '',
    createdDate: new Date()
  };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks(); // 👈 page load
  }

  loadBooks() {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data.map(b => ({
          ...b,
          createdDate: new Date(b.createdDate) // convert string → Date
        }));
        console.log('Books loaded on page load:', this.books);
      },
      error: (err) => console.error('Error loading books', err)
    });
  }

  addBook() {
    this.newBook.createdDate = new Date();

    this.bookService.addBook(this.newBook).subscribe({
      next: () => {
        this.loadBooks(); // refresh table after save
        this.newBook = {
          title: '',
          author: '',
          publisher: '',
          createdDate: new Date()
        };
      },
      error: (err) => console.error('Error saving book', err)
    });
  }
}