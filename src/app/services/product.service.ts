import { Injectable, OnInit } from '@angular/core';
import { Product } from '../domain/product';
import { Observable } from 'rxjs';
  
@Injectable()
export class ProductService{
  
  private products: Array<Product> = [];
  dataSource:Observable<any>;
  constructor() {
    
    this.products.push(new Product(1,"第一件商品", 3.559, 2.5,"第一件商品第一件商品第一件商品第一件商品第一件商品第一件商品第一件商品"));
    this.products.push(new Product(2,"第二件商品", 8.966, 3.5,"第二件商品第二件商品第二件商品第二件商品第二件商品第二件商品第二件商品"));
    this.products.push(new Product(3,"第三件商品", 5.889, 4.5,"第三件商品第三件商品第三件商品第三件商品第三件商品第三件商品第三件商品"));
    this.products.push(new Product(4,"第四件商品", 11.59, 5,"第四件商品第四件商品第四件商品第四件商品第四件商品第四件商品第四件商品"));
    this.products.push(new Product(5,"第五件商品", 3.855, 2,"第五件商品第五件商品第五件商品第五件商品第五件商品第五件商品第五件商品"));
  }

   public getProductList (){
    return this.products;
  }


  public getProductById(id:number){
    return this.products.find(x=> x.id===id);
  }
 
}
