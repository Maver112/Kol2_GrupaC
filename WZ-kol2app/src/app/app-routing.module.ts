import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopWZComponent} from "./components/shop-wz/shop-wz.component";
import {ShopDetailsWZComponent} from "./components/shop-details-wz/shop-details-wz.component";

const routes: Routes = [
  {
  path:'',
  component:ShopWZComponent
},
  {
    path:'shop/items/:id',
    component:ShopDetailsWZComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
