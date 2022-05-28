import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsInterface } from '../productsinterface/products-interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product?: ProductsInterface;
  @Output() productClicked: EventEmitter<ProductsInterface> =
    new EventEmitter<ProductsInterface>();
  constructor() {}

  ngOnInit(): void {}
  productDetails() {
    this.productClicked.emit(this.product);
  }
}
