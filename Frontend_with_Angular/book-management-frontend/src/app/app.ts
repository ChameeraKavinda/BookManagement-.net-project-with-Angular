import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {

  books:any = [];

  newBook = {
    title:'',
    author:'',
    publisher:'',
    createdDate:''
  };

  constructor(private bookService:BookService){}

  ngOnInit(){
    this.loadBooks();
  }

  loadBooks(){
    this.bookService.getBooks().subscribe(data=>{
      this.books = data;
    });
  }

  addBook(){

    this.newBook.createdDate = new Date().toISOString();

    this.bookService.addBook(this.newBook).subscribe(()=>{
      this.loadBooks();
      this.newBook = {
        title:'',
        author:'',
        publisher:'',
        createdDate:''
      };
    });

  }

  deleteBook(id:number){
    this.bookService.deleteBook(id).subscribe(()=>{
      this.loadBooks();
    });
  }

}