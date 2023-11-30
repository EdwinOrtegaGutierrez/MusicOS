import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { StoreComponent } from './routes/store/store.component';
import { StoreGenerosComponent } from './routes/store/store-generos/store-generos.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { CarritoComponent } from './routes/carrito/carrito.component';
import { AjustesComponent } from './routes/ajustes/ajustes.component';
import { PurchaseOrderComponent } from './routes/purchase-order/purchase-order.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"store",
    component:StoreComponent,
  },
  {
    path:"store/:id",
    component:StoreGenerosComponent
  },
  {
    path:"about-us",
    component:AboutUsComponent
  },
  {
    path:"carrito",
    component:CarritoComponent
  },
  {
    path:"ajustes",
    component:AjustesComponent
  },
  {
    path:"purchase_order/album/:token",
    component:PurchaseOrderComponent
  },
  {
    path:"purchase_order/user/:token",
    component:PurchaseOrderComponent
  },
  {
    path:"**",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
