import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:any =[];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts(){
    return this.productList.asObservable()
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product)
  } 
  addToCart(product:any){
    let varmi:any=this.cartItemCheck(product);
    if(varmi===0)
    this.cartItemPush(product);

  } 
  cartItemCheck(product:any){
    let varmi:number = 0;
      this.cartItemList.forEach((x:any) => {
        if(product.id===x.id)
            {
             x.quantity++;
             varmi=1;
             x.total=x.quantity*x.price;
            }
      });   
    return varmi;
  }
  cartItemPush(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice(){
    let grandTotal = 0 ;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if((product.id===a.id) && (product.quantity>1))
          a.quantity--;
      else if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}
