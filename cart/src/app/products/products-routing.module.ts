import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products.component';
import { WishListComponent } from './wish-list/wish-list.component';

 const routes: Routes = [
  { path:'', component:AllProductsComponent  },
  { path: 'cart', component:CartComponent},
  { path:'wish-list', component: WishListComponent},
  { path:'all-products', component: AllProductsComponent},
  { path:'products',component: ProductsComponent},
  { path:'**', component:PageNotFoundComponent},
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class ProductsRoutingModule { 
  
 }
