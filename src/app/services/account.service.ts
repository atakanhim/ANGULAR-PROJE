import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.developer';
import { Login } from '../login/login';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }
  path = environment.API_URL;

  CheckToken(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':'Bearer' + localStorage.getItem("Token")
      })
    }
    return this.http.get<any>(this.path+'/users/me', httpOptions)
  }
  addUser(usr:User):Observable<any>{
    return this.http.post<User>(this.path+'/auth/local/register', usr).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  login(login:Login):Observable<any>{
    return this.http.post<Login>(this.path+'/auth/local', login).pipe(
      tap(data => console.log(JSON.stringify(data))),
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
  isLoggedIn(){
    if(localStorage.getItem("Token"))
    return true;

    else return false;
  }
  isAdminIn(){
    if(localStorage.getItem("Yetki")==="admin")
    return true;

    else return false;
  }
  logOut(){
    localStorage.removeItem("Token");
    localStorage.removeItem("Yetki");
  }
  
}
