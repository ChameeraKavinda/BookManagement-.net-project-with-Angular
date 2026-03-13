import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  createdDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = "https://localhost:7209/api/Book";

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: any) {
    return this.http.post(this.apiUrl, book);
  }

  updateBook(id: number, book: any) {
    return this.http.put(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}