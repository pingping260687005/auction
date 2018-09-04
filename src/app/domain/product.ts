  
export class Product implements IProduct{
   
  constructor( public id:number, public name:string, public price:number,  public rate:number, public desc:string) { 
  }
}

interface IProduct{
     id:number; 
     name:string; 
     price:number; 
     rate:number;
     desc:string; 
}