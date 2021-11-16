import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css']
})
export class ProductAddForms2Component implements OnInit {

  constructor(
    private formBuilder:FormBuilder
    ) { }
    productAddForm: FormGroup = new FormGroup({});
    product : Product = new Product();

    createProductAddForm(){
      this.productAddForm = this.formBuilder.group({
        name:["",Validators.required],// dogrulayıcı
        description:["",Validators.required],
        imageUrl:["",Validators.required],
        price:["",Validators.required],
        categoryId:["",Validators.required]
      });
    }
  ngOnInit(): void {
    this.createProductAddForm();
  }

  add(){
    if(this.productAddForm?.valid){
      this.product = Object.assign({},this.productAddForm.value)
    }
  }

}
