import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from "@angular/forms";
import { AddproductComponent } from './addproduct/addproduct.component';
import { AuthService } from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { DiscountPipe } from './discount.pipe';
import { HighLightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, SignUpComponent, NavbarComponent, CarouselComponent,DiscountPipe
    , ProductComponent, AddproductComponent, CartComponent, MainComponent, ProductdetailComponent,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [MainComponent]
})
export class AppModule { }
