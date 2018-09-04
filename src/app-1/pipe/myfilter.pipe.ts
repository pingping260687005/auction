import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(list:any[], filterArgs: string, keyword:string): any {
    if(!filterArgs || !keyword || !keyword.trim()) return list;
    else{
      return list.filter(x=>x[filterArgs].indexOf(keyword)>=0);
    } 
  }

}
