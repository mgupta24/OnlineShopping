import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  productid:number;
  product
  addproduct={
    productid:null,
    email:null,
    product:{
      name:null,
      image:null,
      brand: null,
      price: null
    }
  }
  constructor(private http: HttpClient,private authservice: AuthService,
    private currentroute:ActivatedRoute,private router: Router) {
    this.productid=this.currentroute.snapshot.params.pid
   
    var url="https://learningmeanwithashu.herokuapp.com/api/product/"+this.productid;
    console.log(url);

    this.http.get(url).subscribe((response)=>{
      console.log(response);
      this.product=response['data'];
      console.log("product details", this.product);
      this.addproduct.productid=this.productid;
      this.addproduct.product.name=response['data']['name'];
      this.addproduct.product.brand=response['data']['brand'];
      this.addproduct.product.image=response['data']['image'];
      this.addproduct.product.price=response['data']['price']; 

      /* this.addproduct.product.name=this.product.name;
      this.addproduct.product.brand=this.product.brand;
      this.addproduct.product.image=this.product.image;
      this.addproduct.product.price=this.product.price; */

      this.addproduct.email=localStorage.getItem('email');
    },(error)=>{
      console.log(error);
    });

  }

  ngOnInit() {
  }

  addToCart()
  {
    if(localStorage.getItem('isLoggedIn'))
         {

    var url="https://learningmeanwithashu.herokuapp.com/api/addtocart";
    console.log('cart details...',this.addproduct);
   this.http.post(url,this.addproduct).subscribe((response)=>{
     console.log("successfull response....",response)
   },(error)=>{
     console.log("error.....",error);
   });
  }
  else{
    this.router.navigate(['/login']);
  }
}

}
