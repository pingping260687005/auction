import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MyPipePipe implements PipeTransform {

  transform(value: number, args?: number): any {
     if(args){
      return value*args;
     }else{
       return value;
     }
  }

}
