import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'login',component: LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'cart',component:CartComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'productdetail/:pid',component:ProductdetailComponent},
  {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
