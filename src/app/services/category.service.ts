import { Injectable } from '@angular/core';
import { Category } from '../category/category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {environment} from 'src/environments/environment';
@Injectable()
export class CategoryService {
 
  constructor(private http: HttpClient) {}
 
  path = 'http://localhost:3000';
  //path = environment.API_URL; 
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path+"/categories").pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errMessage = '';
    if (err.error instanceof ErrorEvent) {
      errMessage = 'Bir hata olustu , hada kodu: ' + err.error.message;
    } else {
      errMessage = 'Sistemsel Hata';
    }
    return throwError(errMessage);
  }
}
