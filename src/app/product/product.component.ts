import { Component, OnInit } from '@angular/core';
import { Product } from '../domain/product';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products:Product[];

  private productName:string;
  dataSource:Observable<any>;
  constructor(private productService:ProductService, private http: Http) {   
    //用http请求
    this.dataSource = this.http.get('/api/products')
                     .map(res=> res.json());}

  ngOnInit() {
    //this.products = this.productService.getProductList();

    this.dataSource.subscribe((res)=>
    {
      this.products = res
      
      console.log(res);
    });
  }


  setProductName(event){
    this.productName = event.target.value;

  }
}
