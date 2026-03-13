import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  api = "https://localhost:7209/api/Book";

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.api);
  }

  addBook(book: Omit<Book, 'id'>): Observable<any> {
    return this.http.post(this.api, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}