import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/LoginGuard';
import { ProductAddForms2Component } from './product/product-add/product-add-forms2.component';
import { ProductDelComponent } from './product/product-edit/product-del.component';
import { ProductComponent } from './product/product.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:'products',component : ProductComponent},
  {path:'product-add',component : ProductAddForms2Component,canActivate:[LoginGuard]},
  {path:'product-edit',component : ProductDelComponent,canActivate:[LoginGuard]},
  {path:'app-checkout',component : CheckoutComponent,canActivate:[LoginGuard]},
  {path:'login',component : LoginComponent},
  {path:'app-cart',component : CartComponent},
  {path:'app-sign-in',component : SignInComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products/category/:categoryId',component : ProductComponent}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
