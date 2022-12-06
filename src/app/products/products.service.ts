import { Injectable } from '@angular/core';
import { Iproduct } from '../shared/model/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productsArray : Iproduct[] = [
  {
    pname:"Samsung",
    pId:1,
    pStatus: "In Progress"
  },
  {
    pname:"Iphone 11",
    pId:2,
    pStatus: "Delivered"
  },
  {
    pname:"Redme Note 8 Pro",
    pId:3,
    pStatus: "Dispatched"
  },
]
  constructor() { }
  getAllproducts() : Iproduct[]{
    return this.productsArray;
  }

  getproduct(id:number){
 return this.productsArray.find(prod => prod.pId===id)
  }
}
