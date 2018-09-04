import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StateEmitService } from '../shared/state-emit.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() rate: number;
  @Output() rateChange = new EventEmitter();//当rate ， output是rateChange就可以在父级用双向绑定
  @Input() canClick: boolean = false;
  private stars: boolean[];

  constructor(private stateEmitService:StateEmitService) { }

  ngOnInit() {
    
    this.stars = new Array<boolean>(5);
    let rateInt = Math.floor(this.rate);
    for (let i = 0; i < 5; i++) {
      this.stars[i] = (rateInt > i) ? true : false;
    }
    console.log("this.stars: " + this.stars);
  }

  clickStar(event: any, index: number) {
    if (this.canClick) {
      this.rate = index+1;
      this.ngOnInit(); 
      this.rateChange.emit(this.rate);
    }
  }
}
