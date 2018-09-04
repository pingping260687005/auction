import { ProductService } from './../shared/product.service';
import { Comment } from './../domain/comment';
import { CommentService } from './../shared/comment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../domain/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private comments:Comment[];
  private product:Product;
  constructor(private routeInfo: ActivatedRoute, private commentService: CommentService,private productService:ProductService) { }

  ngOnInit() {
    let productId = this.routeInfo.snapshot.params["productId"];
    this.product = this.productService.getProductById(productId);
    this.comments = this.commentService.getCommentByProductId(productId);
   // this.comments.length
  }

}
