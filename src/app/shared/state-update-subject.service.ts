import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StateUpdateSubjectService {
  private subject:Subject<any>;
  constructor() {
    this.subject = new Subject<any>();
   }
   setState(state:string){
    this.subject.next(state);

   }
   getState(){
     return this.subject.asObservable();
   }
}
