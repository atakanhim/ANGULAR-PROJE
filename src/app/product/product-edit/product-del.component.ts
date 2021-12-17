import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-del',
  templateUrl: './product-del.component.html',
  styleUrls: ['./product-del.component.css'],
  providers:[CategoryService, ProductService]
})
export class ProductDelComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private alertifyService: AlertifyService,
    private productService: ProductService
  ) {}
  formValue !: FormGroup;
  product:Product = new Product();
  products: Product[] = [];
  categories: Category[] = [];
  filterText = '';

  ngOnInit(): void {
    this.createProductAddForm();//form verileri dolduruyor
    this.getProductWihtId(this.filterText);//urunler diziye ekleniyor
    this.categoryService.getCategories().subscribe(data =>{ //categori servisinden categoriler çekiliyor
      this.categories = data;
    })
  }
  thisProduct(product:any){
    this.product=product;
    this.onEdit(product);
  }
  putProductData(){
    if(this.formValue.valid){
      let x:any = JSON.stringify(this.product.id);
      this.product= this.formValue.value as Product;
      this.productService.updateProduct(this.product,x).subscribe((data) => {
        this.alertifyService.success(this.product.name+' Ürününü  Update işlemi başarılı');//eski adı görünmesi istiyorsak product yeni ad ise data
        this.getProductWihtId("");
      });
      
      let ref = document.getElementById('cansel')
      ref?.click();
      this.formValue.reset();
    }
    else
      this.alertifyService.warning('Lütfen Tüm Alanları Doldurunuz ');
  }
  onEdit(row:any){
    this.formValue.controls["name"].setValue(row.name);
    this.formValue.controls["description"].setValue(row.description);
    this.formValue.controls["imageUrl"].setValue(row.imageUrl);
    this.formValue.controls["price"].setValue(row.price);
    this.formValue.controls["categoryId"].setValue(row.categoryId);
  }
  createProductAddForm(){
    this.formValue = this.formBuilder.group({
      name:["",Validators.required],// dogrulayıcı
      description:["",Validators.required],
      imageUrl:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required]
    });
  }
  getProductWihtId(id:any) {
    this.productService.getProductWithId(id).subscribe(data=>{
      this.products = data;
    },err=>{
      alert(err);
    })
  } 
  deleteProduct(id:any) {
   
    this.productService.deleteProduct(id).subscribe((res) => {
      this.alertifyService.error(id+' nolu ürün silindi ');
      this.getProductWihtId(this.filterText);
    });
    
  }
}
