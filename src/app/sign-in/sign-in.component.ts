import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.developer';
import { User } from '../login/user';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [CategoryService, ProductService]
})
export class SignInComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private accountService:AccountService,
    private alertifyService: AlertifyService,
    private router:Router
  ) { }
  UserAddForm: FormGroup = new FormGroup({});
  usr:User = new User();
  ngOnInit(): void { 
    this.UserAddForm.reset();
    this.createProductAddForm();
  }
  createProductAddForm(){
    this.UserAddForm = this.formBuilder.group({
      password:["",Validators.required],// dogrulayıcı
      email:["",Validators.required],
      username:["",Validators.required]
    });
  }
  addUser(){
    if(this.UserAddForm.valid){
      this.usr =this.UserAddForm.value as User;
      console.log(this.usr);
      try {
        this.accountService.addUser(this.usr).subscribe(data => {
          this.alertifyService.success("Uye Olma Basarili Hos Geldiniz \n"+data.user.username);
          localStorage.setItem("Token",data.jwt);
          localStorage.setItem("Yetki",data.user.yetki);
          console.log(data);
          this.router.navigate(["products"]);
        })
      } catch (error) {
        this.alertifyService.success("Uye olma basarisiz"+error);
      }
      
    }
    else{
      this.alertifyService.warning("tum verileri giriniz");
    }

  }

}
