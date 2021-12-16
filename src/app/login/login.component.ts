import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';
import { Login } from './login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:Login = new Login();
  constructor(private accountService:AccountService,private alertifyservice:AlertifyService,private router:Router) { }

  ngOnInit(): void {
  }
  login(form:NgForm){

    this.accountService.login(this.model).subscribe(data=>{
      this.alertifyservice.success("Giris Basarili Hos Geldiniz");
      localStorage.setItem("Token",data.jwt);
      setTimeout(() => {
        this.router.navigate(["products"]);
      }, 1200);
    })
    form.reset();// resetliyoruz yazılar siliniyor.
  
    
     
  
  }
}
