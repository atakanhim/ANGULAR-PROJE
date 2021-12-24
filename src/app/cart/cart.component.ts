import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[];
  public grandTotal :number=0;
  constructor(private cartService:CartService) { }
   
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products =res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
}
