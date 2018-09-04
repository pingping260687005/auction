import { Comment } from './../domain/comment';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {
  private comments:Array<Comment>;
  private commentId:number = 0;
  constructor() {
    this.comments = [];
    this.comments.push(new Comment(++this.commentId,1,"用户", 2.5, new Date(), "挺好的"));
    this.comments.push(new Comment(++this.commentId,1,"用户", 3.5,new Date(), "质量不错"));
    this.comments.push(new Comment(++this.commentId,2,"用户", 4.5,new Date(), "朋友很喜欢"));
    this.comments.push(new Comment(++this.commentId,3,"用户",  5,new Date(), "还行"));
    this.comments.push(new Comment(++this.commentId,5,"用户", 2,new Date(), "一般"));

   }

   public getCommentList (){
    return this.comments;
  }

  public getCommentsByProductId(productId:number){
    return this.comments.filter(x=> x.productId===productId);
  }

  public addCommentFromNewCommentObj(newComment:Comment ){
    newComment.id = ++this.commentId;//give the comment one only id, sample id 
    this.comments.unshift(newComment);
    return newComment;
  }

  public addComment(productId:number, user:string,rate:number,content:string){
    const newComment = new Comment(++this.commentId,productId,user, rate,new Date(), content);
    this.comments.unshift(newComment);
    return newComment;
  }
}
