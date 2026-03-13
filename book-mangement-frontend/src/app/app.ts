import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './components/book/book.component';


@Component({
  selector: 'app-root',
 imports: [BookComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('book-mangement-frontend');
}
