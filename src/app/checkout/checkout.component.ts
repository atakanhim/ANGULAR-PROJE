import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { eventListeners } from '@popperjs/core';
import { AlertifyService } from '../services/alertify.service';
import { CartService } from '../services/cart.service';
import { Address } from './Address';
import { Checkout } from './Checkout';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  AddAddressForm: FormGroup = new FormGroup({});
  AddCheckoutForm: FormGroup = new FormGroup({});
  public products:any=[];
  public grandTotal :number=0;
  public shippingPrice :number=10;
  public productTotal :number=0;
  public checkoutControl:boolean=false;
  address:Address = new Address();
  checkout:Checkout=new Checkout();
  constructor(private cartService:CartService,private alertifyService:AlertifyService, private formBuilder:FormBuilder,) { }
  
  ngOnInit(): void {
    this.createProductAddForm();
      this.cartService.getProducts()
      .subscribe(res=>{
        this.products =res;
        this.productTotal=this.cartService.getTotalPrice();
        if(this.productTotal>10000)
        this.shippingPrice=0;
        this.grandTotal=this.productTotal+this.shippingPrice
      })
  }

  createProductAddForm(){
    this.AddAddressForm = this.formBuilder.group({
      country:["",Validators.required],// dogrulayıcı
      name:["",Validators.required],
      city:["",Validators.required],
      district:["",Validators.required],
      neighborhood:["",Validators.required],
      postacode:["",Validators.required],// dogrulayıcı
      telno:["",Validators.required],
      email:["",Validators.required],
      binano:["",Validators.required],// dogrulayıcı
      kat:["",Validators.required],
      daire:["",Validators.required],
      sokak:["",Validators.required],

    });
    this.AddCheckoutForm = this.formBuilder.group({
      cardname:["",Validators.required],// dogrulayıcı
      cardnumber:["",Validators.required],
      expirationdate:["",Validators.required],
      cvv:["",Validators.required]
    });
    
  }
  alisverisiTamamla(){
    this.cartService.removeAllCart();
  }
  Checkout(){
    if(this.AddCheckoutForm.valid && this.AddAddressForm.valid){
      this.checkout=this.AddCheckoutForm.value as Checkout;
      this.address=this.AddAddressForm.value as Address;
      console.log(this.checkout);
      console.log(this.address);
      this.alertifyService.success("Ödeme Başarılı");
      this.AddCheckoutForm.reset();
      this.AddAddressForm.reset();

   
      this.checkoutControl=true;
    }
    else if(this.AddCheckoutForm.valid){
      this.alertifyService.warning("Adres Bilgilerini Doldurunuz");
    }
    else if(this.AddAddressForm.valid){
      this.alertifyService.warning("Ödeme Bilgilerini Doldurunuz");
    }
    else{
      this.alertifyService.warning("Tüm Alanları Doldurduğunuzdan Emin olunuz");
    }
  }
}
