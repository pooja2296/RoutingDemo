import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../shared/model/data';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products : Iproduct[]=[];
productId : number=1;
constructor(private ProductsService: ProductsService){}



  ngOnInit(): void {
    this.products = this.ProductsService.getAllproducts();
  }
  selectPerson(id:number){
    debugger;
    this.productId = id;
  }
}
