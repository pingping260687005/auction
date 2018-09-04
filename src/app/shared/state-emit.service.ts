import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class StateEmitService {
  public eventEmitter:EventEmitter<any>;
  constructor() { 
    this.eventEmitter = new EventEmitter();
  }
}
