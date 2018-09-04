import { CommentService } from './../services/comment.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../domain/product';
import { Comment } from './../domain/comment';
import { StateEmitService } from '../shared/state-emit.service';
import { FormGroupDirective, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {
  @Input() product: Product;
  private rate:number = 0;
  @Output() commentState: EventEmitter<number>= new EventEmitter<number>();
  private moduleForm:FormGroup;

  constructor(private commentService: CommentService, private stateEmitService:StateEmitService) { 
    this.moduleForm = new FormGroup({
      content:new FormControl()
    });
  }


  ngOnInit() {
    //console.log(this.product.id);
    this.stateEmitService.eventEmitter.subscribe((value)=>{
       this.rate = value;
    });
  }
  onSave(){
    let value=this.moduleForm.get("content").value;
    // public id:Number, public productId, public user:string,  public rate:number, public date: Date, public content:string
    const com = new Comment(null, this.product.id, "小红", this.rate, new Date(), value);
    this.commentService.addCommentFromNewCommentObj(com);
    this.commentState.emit(this.product.id);

       this.rate =0;
  }
}
