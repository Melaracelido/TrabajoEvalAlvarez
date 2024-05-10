import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductoModule } from './producto.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { NikeComponent } from './pages/nike/nike.component';
import { AdidasComponent } from './pages/adidas/adidas.component';
import { VansComponent } from './pages/vans/vans.component';

const routes: Routes = [

  {
   path:"producto",component:ProductoComponent
  },
  {
    path:"nike",component:NikeComponent
   },
   {
    path:"adidas",component:AdidasComponent
   },
   {
    path:"vans",component:VansComponent
   },
   
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
