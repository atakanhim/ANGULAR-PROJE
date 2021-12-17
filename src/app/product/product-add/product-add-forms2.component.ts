import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
    providers: [CategoryService, ProductService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService,
    ) { }
    categories: Category[] = [];
    productAddForm: FormGroup = new FormGroup({});
    product : Product = new Product();
    imageUrl:any="";
    onIzleme:string="Ön İzleme Aç";

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
    this.categoryService.getCategories().subscribe(data =>{
      this.categories = data;
    })
  }

  add() {
    if(this.productAddForm.valid){
      // this.product = Object.assign({},this.productAddForm.value);  
      this.product= this.productAddForm.value as Product

       this.productService.addProduct(this.product).subscribe((data) => {
        this.alertifyService.success(data.name+'Ürününü Veritabanına Ekleme işlemi başarılı');
      });

      this.productAddForm.reset();
    }
    else
      this.alertifyService.warning('Lütfen Tüm Alanları Doldurunuz ');
    
  }
  showImage(){
    let resim = document.getElementById("resim");
    resim?.setAttribute("src",this.imageUrl);
  }
  changeDisplayImg(){
    let resim = document.getElementById("resim");
    let btn = document.querySelector("#onizleBtn");
    let btnInnerHtml = btn?.innerHTML;
    console.log(btnInnerHtml);
    if(btnInnerHtml === "Ön İzleme Aç"){
      btn?.setAttribute("style","border: 3px solid rgba(245, 9, 9, 0.568)");
      resim?.setAttribute("style","display:block;");
      this.onIzleme="Ön İzleme Kapa";
    }
    if(btnInnerHtml === "Ön İzleme Kapa"){
      btn?.setAttribute("style","border: 3px solid rgba(49, 252, 76, 0.568)");
      resim?.setAttribute("style","display:none;");
      this.onIzleme="Ön İzleme Aç";
    } 
  }
}
