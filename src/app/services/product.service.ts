import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';
@Injectable()
export class ProductService {
  constructor(private http: HttpClient,private alertifyService:AlertifyService) {}
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
  getProductWithId(Id:any): Observable<Product[]> {
    
    let newPath =this.path;
    if(Id){
      newPath+="?id="+Id;
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
  updateProduct(data:any,id : number){
    return this.http.put<any>(this.path+"/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }),catchError(this.handleError))
  }
  deleteProduct(id:any){
    return this.http.delete<any>(this.path+"/"+id)
    .pipe(map((res:any)=>{
      return res;
    }),catchError(this.deleteError))
  }

  deleteError(err: HttpErrorResponse){
    let errMessage = '';
    if (err.error instanceof ErrorEvent) {
      errMessage = 'Bir hata olustu , hada kodu: ' + err.error.message;
    } else {
      errMessage = 'Bu id de ürün bulunamadı';     
    }
   alert(errMessage);
    return  throwError(errMessage)
  }
  handleError(err: HttpErrorResponse) {
    let errMessage = '';
    if (err.error instanceof ErrorEvent) {
      errMessage = 'Bir hata olustu , hada kodu: ' + err.error.message;
    } else {
      errMessage ="Sistemsel Hata";
    }
    alert(errMessage);
    return throwError(errMessage);
  }
}
