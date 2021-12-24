import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.developer';
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
  
    if(this.accountService.isLoggedIn()){
      this.alertifyservice.error("Zaten Giriş Yapmışsınız Bir Daha Giriş Yapamazsınız \n");
    }
    else{
      try{
        this.accountService.login(this.model).subscribe(data=>{
          
          this.alertifyservice.success("Giris Basarili Hos Geldiniz \n"+data.user.username);
          localStorage.setItem("Token",data.jwt);
          localStorage.setItem("Yetki",data.user.yetki);
          console.log(data);
            this.router.navigate(["products"]);
        })
      }
      catch{
        this.alertifyservice.warning("Lütfen Bilgileri Kontrol Ediniz");
      }
    }
    form.reset();// resetliyoruz yazılar siliniyor.
  }
  
}
