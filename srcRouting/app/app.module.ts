import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProducnameComponent } from './producname/producname.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducnameComponent,
    ProductlistComponent,
    InvalidpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
