import { Injectable } from '@angular/core';

// add lib to make http calls to server api
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // constructor: starup code of servicel. Initalize HttpClient dependency so all methos can use
  constructor(private http: HttpClient) { }

  // get all
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4000/api/v1/books');
  }
}
