import { Component, OnInit } from '@angular/core';
import { ProductService } from "../shared/product.service";
import { Product } from "../domain/product";
import { FormControl } from '@angular/forms';
import "rxjs/Rx";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products:Array<Product>;
  private imgURL="http://placehold.it/320x150";
  private filterControl:FormControl = new FormControl();
  private keyWord:string;
  
  constructor(private productService: ProductService) {
    // debounceTime 是用户停止输入后的500ms 在相应valuechange 事件
    // 订阅 input控件 的 value change 的事件
    this.filterControl.valueChanges
    .debounceTime(500)
    .subscribe(value=>{
      this.keyWord = value;
    });
   }
 
  ngOnInit() {
    this.products = this.productService.getProductList();

    
  }

}
