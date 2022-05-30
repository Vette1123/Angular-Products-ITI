import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductsInterface } from '../productsinterface/products-interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  @Output() productadded: EventEmitter<ProductsInterface> =
    new EventEmitter<ProductsInterface>();

  myform = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  get title() {
    return this.myform.get('title') as FormControl;
  }
  get description() {
    return this.myform.get('description') as FormControl;
  }
  get image() {
    return this.myform.get('image') as FormControl;
  }
  get price() {
    return this.myform.get('price') as FormControl;
  }

  add(data: any) {
    this.productadded?.emit(data);
    console.log(data);
  }
  constructor() {}

  ngOnInit(): void {}
}
