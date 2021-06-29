import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ShopWZComponent } from './components/shop-wz/shop-wz.component';
import { ShopItemWZComponent } from './components/shop-item-wz/shop-item-wz.component';
import { ShopDetailsWZComponent } from './components/shop-details-wz/shop-details-wz.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopWZComponent,
    ShopItemWZComponent,
    ShopDetailsWZComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
