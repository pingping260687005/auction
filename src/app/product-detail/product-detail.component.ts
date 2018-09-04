import { Comment } from './../domain/comment';
import { Product } from './../domain/product';
import { ProductService } from './../services/product.service';
import { CommentService } from './../services/comment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private product: Product;
  private comments: Comment[];
  private contentText:string;
  private newRate:number;
  constructor(private routeInfo: ActivatedRoute, private commentService: CommentService,  private productService: ProductService) { }

  ngOnInit() {
    /*this.routeInfo.params.subscribe(param=>{
      this.productId = param['id'];
    });*/

    let productId = Number(this.routeInfo.snapshot.params['id']);
 
    this.comments = this.commentService.getCommentsByProductId(productId);
    this.product = this.productService.getProductById(productId);
    // setInterval(()=>{ 
    //   this.commentService.addComment(1, "ddd", 3,"fsafdsafdafda");
    //   this.comments = this.commentService.getCommentsByProductId(productId);
    // },5000);
  }

  onSave(){
    // public id:Number, public productId, public user:string,  public rate:number, public date: Date, public content:string
    const com = new Comment(null, this.product.id, "小红", this.newRate, new Date(), this.contentText);
    this.commentService.addCommentFromNewCommentObj(com);
    this.comments = this.commentService.getCommentsByProductId(this.product.id);
  }
}
