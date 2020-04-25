import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { PlistComponent } from './components/plist/plist.component';
import { PcontentComponent } from './components/pcontent/pcontent.component';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [ProductComponent, PlistComponent, PcontentComponent, CartComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
