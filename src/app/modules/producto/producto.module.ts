import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { NikeComponent } from './pages/nike/nike.component';
import { AdidasComponent } from './pages/adidas/adidas.component';
import { VansComponent } from './pages/vans/vans.component';


@NgModule({
  declarations: [
    ProductoComponent,
    NikeComponent,
    AdidasComponent,
    VansComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
