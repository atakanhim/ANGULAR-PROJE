import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { catchError, filter } from 'rxjs/operators';
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
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private alertifyService: AlertifyService,
    private productService: ProductService
  ) {}
  products: Product[] = [];
  categories: Category[] = [];
  filterText = '';

  ngOnInit(): void {
    this.getProductWihtId(this.filterText);
  }

  getProductWihtId(id:any) {
    this.productService.getProductWithId(id).subscribe(data=>{
      this.products = data;
    })
  } 
  deleteProduct(id:any) {
      // silme işlemi

    // this.productService.deleteProduct(id).subscribe((res) => {
    //   this.alertifyService.error(id+' nolu ürün silindi ');
    // });
  }
}
