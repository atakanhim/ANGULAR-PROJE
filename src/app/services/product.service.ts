import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';
  getProducts(categoryId:any): Observable<Product[]> {
    console.log(categoryId);
    
    let newPath =this.path;
    if(categoryId){
      newPath+="?categoryId="+categoryId;
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap(),
      catchError(this.handleError)
    );
  }
  addProduct(product:Product):Observable<Product>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path,product,httpOptions).pipe(
     // tap(data => console.log(JSON.stringify(data))),
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
