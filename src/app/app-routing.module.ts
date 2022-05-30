import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  { path: 'products', component: AllProductsComponent, pathMatch: 'full' },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', redirectTo: '/register', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
