import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router)  { }

  ngOnInit(): void {
  }
  gotoproducts() {
    this.router.navigate(['products'])
  }
}
