import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../../services/book.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  searchText = "";

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit() {
    this.loadBooks();

    // Auto-refresh when navigating back from Add/Edit page
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.loadBooks());
  }

  loadBooks() {
    this.bookService.getBooks().subscribe({
      next: data => {
        console.log("Books loaded:", data); 
        this.books = data;
      },
      error: err => console.error("Failed to load books:", err)
    });
  }

  deleteBook(id: number) {
    if (confirm("Are you sure you want to delete this book?")) {
      this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
    }
  }

  get filteredBooks() {
    if (!this.searchText) return this.books;
    return this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}