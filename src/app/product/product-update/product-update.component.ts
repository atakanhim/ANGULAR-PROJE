import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
  providers:[CategoryService, ProductService]
})
export class ProductUpdateComponent implements OnInit {

  constructor(){}
  
  

  ngOnInit(): void {
  }

  
  
}
