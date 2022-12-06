import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/data';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
product: Iproduct |undefined;
productId : number = 3
  //route: ActivatedRoute | null | undefined;
  //route: ActivatedRoute | null | undefined;
  constructor(private productService : ProductsService,
    private router : Router
    // private route : ActivatedRoute 
   ) { }

  ngOnInit(): void {
    this.product = this.productService.getproduct(this.productId)
  }
  gotoUsers() {
    this.router.navigate(['users'])
    // this.router.navigate(['users'],{relativeTo: this.route})
  }
}
