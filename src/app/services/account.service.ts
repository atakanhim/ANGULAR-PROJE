import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {
  loggedIn = false;
  constructor() { }



  login(user:User):boolean{
    if(user.userName=="atakan"&&user.password=="1234"){
      this.loggedIn = true;
      localStorage.setItem("isLogged",user.userName);
      return true;
    }
    return false
  }

  isLoggedIn(){
    return this.loggedIn
  }
  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
