import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routering } from './app.routering';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './body/product/product.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './body/detail/detail.component';
import { HomeComponent } from './body/home/home.component';
import { CartComponent } from './body/cart/cart.component';

import { CartService } from './body/cart/cart.service';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    BodyComponent,
    FooterComponent,
    DetailComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routering
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
