import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public totalItem:number =0;
  constructor(private accountservice:AccountService,private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  isLoggedin(){
    return this.accountservice.isLoggedIn();
  }
  LogOut(){
    this.accountservice.logOut();
  }
  isAdminIn(){
    return this.accountservice.isAdminIn();
  }
}
