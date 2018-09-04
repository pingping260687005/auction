import { Comment } from './../domain/comment';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {
  private comments:Comment[];
  constructor() {
    this.comments = this.createComments();
   }
  private createComments():Comment[]{
      let comments= new Array<Comment>();
      comments.push(new Comment(1, 1, "wushe",  3,new Date(),  "这个东西不错"));
      comments.push(new Comment(2, 2, "买家", 4,new Date(),  "我觉得用起来挺好的"));
      comments.push(new Comment(3, 3, "买家", 4.5,new Date(),  "挺实用"));
      comments.push(new Comment(4, 4, "买家", 3.5,new Date(),  "好好好66666"));
      comments.push(new Comment(5, 5, "买家", 5, new Date(), "我送给朋友的他说挺好的")); 
      comments.push(new Comment(6, 1, "xiaohang",  3.5,new Date(),  "我好像买的太小的，不过客服人好给我很快换了"));
      comments.push(new Comment(7, 2, "xiaoming",  3, new Date(), "质量不错"));
      comments.push(new Comment(8, 1, "lidaren",  4.5,new Date(),  "我妈妈喜欢  "));
      return comments;
    }

    public getCommentList():Comment[]{
      return this.comments;
    }
    public getCommentByProductId(productId:any):Comment[]{
      return this.comments.filter(comment=>{return comment.productId==productId});

    }
}
