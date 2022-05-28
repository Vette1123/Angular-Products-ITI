import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products-service/products.service';
import { ProductsInterface } from '../productsinterface/products-interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  allProducts?: ProductsInterface[];

  ngOnInit(): void {
    this.allProducts = this.productsService.getAllProducts();
  }
}
