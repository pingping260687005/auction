import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input()
  private rating:number = 0;
  private stars:boolean[];
  constructor() {
   }

  ngOnInit() {
    this.stars = [false,false, false, false, false];
    let ratInt  = Math.floor(this.rating);
    for(let i = 0; i<ratInt;i++){
      this.stars[i]= true;
    } 
  }

}
