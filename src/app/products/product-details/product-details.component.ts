import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products-service/products.service';
import { ProductsInterface } from '../productsinterface/products-interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {}
  productId?: number;
  product?: ProductsInterface;
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.productId = params['id'];
      this.product = this.productsService.getProductById(this.productId);
    });
  }
  goBack(): void {
    this.router.navigate(['/products']);
  }
}
