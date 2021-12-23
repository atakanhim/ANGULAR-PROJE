import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  public cartItemList:any =[];
  public productList = new BehaviorSubject<any>([]);
  constructor() {
    if(localStorage.getItem('cart')!=null){ // session dan veri cekme eger bos degilse
      var cart:any = localStorage.getItem('cart');
      cart = JSON.parse(cart);
      console.log(cart);
      this.cartItemList=cart;
      this.productList.next(cart);
    }
   }
  getProducts(){
    return this.productList.asObservable();//sepeti cagir
  }
  addToCart(product:any){// sepete ekle
    let varmi:any=this.cartItemCheck(product);
    if(varmi===0)
    this.cartItemPush(product);

    localStorage.setItem("cart",JSON.stringify(this.cartItemList));
  } 
  cartItemCheck(product:any){// cart itemın degerini cekiyoruz quantitysini
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
    this.cartItemList.push(product);//sepete pushlama
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    
  }
  getTotalPrice(){// sepetteki totel para
    let grandTotal = 0 ;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total
    })
    return grandTotal;
  }
  removeCartItem(product:any){//sepetten silme
    this.cartItemList.map((a:any,index:any)=>{
      if((product.id===a.id) && (product.quantity>1))
          a.quantity--;
      else if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    
    this.productList.next(this.cartItemList);
    localStorage.setItem("cart",JSON.stringify(this.cartItemList));
  }
  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
    localStorage.removeItem("cart");
  }
}
