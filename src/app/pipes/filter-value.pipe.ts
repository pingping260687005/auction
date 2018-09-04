import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../domain/product';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';

@Pipe({
  name: 'filterValue'
})
export class FilterValuePipe implements PipeTransform {

  transform(list: Product[], arg: string, productName:string): any {
    if(productName && productName.trim()){
      return list.filter(product=>product[arg].includes(productName));
    }else {
      return list;
    }
  }

}
