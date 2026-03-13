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
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  addBook() {
    this.newBook.createdDate = new Date();

    this.bookService.addBook(this.newBook).subscribe(() => {
      this.loadBooks();

      this.newBook = {
        title: '',
        author: '',
        publisher: '',
        createdDate: new Date()
      };
    });
  }
}