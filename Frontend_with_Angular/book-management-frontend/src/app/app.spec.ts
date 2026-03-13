import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app';
import { BookService } from './services/book.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    const bookServiceStub = {
      getBooks: () => of([]),
      addBook: () => of(null),
      deleteBook: () => of(null),
    };

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: BookService, useValue: bookServiceStub }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Book Management System');
  });
});
