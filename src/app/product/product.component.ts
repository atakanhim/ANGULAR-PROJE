import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private cartService:CartService,

    ) {}
  filterText = '';
  title = 'Urun Listesi';
  products: Product[] = [];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products = data;
       
        this.products.forEach((a:any)=>{
          let toplam:number  = 0;
        
            Object.assign(a,{quantity:1,total:a.price});
        });
       
      })
    })
  }
  addToCard(product: any) {
    this.alertifyService.success(product.name + ' Added');
    this.cartService.addToCart(product);
  }
}
