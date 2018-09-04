import { Product } from './../domain/product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  public products:Array<Product>;
  constructor() {
      this.products = this.createProducts();  
   }

   private createProducts():Product[]{
 
      let products= new Array<Product>();
      products.push(new Product(1, "第一件商品", 10.899, 3,  "第一件商品第一件商品第一件商品第一件商品第一件商品第一件商品"));
      products.push(new Product(2, "第二件商品", 5.425, 4,  "第二件商品第二件商品第二件商品第二件商品第二件商品第二件商品"));
      products.push(new Product(3, "第三件商品", 7.66, 4.5,  "第三件商品第三件商品第三件商品第三件商品第三件商品第三件商品"));
      products.push(new Product(4, "第四件商品", 5.5, 3.5,  "第四件商品第四件商品第四件商品第四件商品第四件商品第四件商品"));
      products.push(new Product(5, "第五件商品", 8.7, 5,  "第五件商品第五件商品第五件商品第五件商品第五件商品第五件商品"));   
      return products;
    }

    public getProductList():Product[]{
      return this.products;
    }

    public getProductById(id:any):Product{
        return this.products.find(x=>x.id==id);
    }

}
