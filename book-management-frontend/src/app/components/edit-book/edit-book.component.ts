import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent implements OnInit {

  id!: number;

  book: any = {
    title: '',
    author: '',
    isbn: ''
  };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.bookService.getBook(this.id).subscribe({
      next: (data) => {
        this.book = data;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  updateBook() {
    this.bookService.updateBook(this.id, this.book).subscribe(() => {
      alert("Updated Successfully");
      this.router.navigate(['/']);
    });
  }

}