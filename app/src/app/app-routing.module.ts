import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { StoreComponent } from './routes/store/store.component';
import { StoreGenerosComponent } from './routes/store/store-generos/store-generos.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
