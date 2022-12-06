import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/model/data';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
//product : Iproduct | any;
//@Input() pId : any;
product : Iproduct |undefined
productId : number = 3;
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    //debugger;
    this.product = this.productService.getproduct(this.productId)
  }

}
