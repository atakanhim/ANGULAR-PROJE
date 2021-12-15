import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/LoginGuard';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { ProductDelComponent } from './product/product-edit/product-del.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products',component : ProductComponent},
  {path:'product-add-2',component : ProductAddForms2Component,canActivate:[LoginGuard]},
  {path:'product-edit',component : ProductDelComponent,canActivate:[LoginGuard]},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products/category/:categoryId',component : ProductComponent},
  {path:'login',component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
