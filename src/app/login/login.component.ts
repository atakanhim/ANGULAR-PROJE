import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';
import { User } from './user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:User = new User();
  constructor(private accountService:AccountService,private alertifyservice:AlertifyService,private router:Router) { }

  ngOnInit(): void {
  }
  login(form:NgForm){
    this.accountService.login(this.model);// login ediyoruz

    form.reset();// resetliyoruz yazılar siliniyor.
    
    this.alertifyservice.success("Giriş Başarılı Ana Sayfaya Yönlendiriliyorsunuz")
    setTimeout(() => {
      this.router.navigate(["products"]);
    }, 2000);
    
  }
}
