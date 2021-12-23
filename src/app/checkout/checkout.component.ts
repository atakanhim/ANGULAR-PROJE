import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public products:any=[];
  public grandTotal :number=0;
  public shippingPrice :number=10;
  public productTotal :number=0;
  constructor(private cartService:CartService,private alertifyService:AlertifyService) { }
   
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products =res;
      this.productTotal=this.cartService.getTotalPrice();
      if(this.productTotal>10000)
      this.shippingPrice=0;
      this.grandTotal=this.productTotal+this.shippingPrice;

    })
  }

}
