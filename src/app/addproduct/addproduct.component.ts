import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../auth.service';
import { ProductComponent } from '../product/product.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product= {
    name: null,
    price: null,
    image:null,
    brand: null
  }
  owner={
    name: null,
    email:null
  }
  newproduct

  addProduct()
  {
    var url = "https://learningmeanwithashu.herokuapp.com/api/createproduct";
    console.log("logged in user details",this.authservice.user);
    console.log("logged in user name",this.authservice.user.name);
    this.owner=this.authservice.user;
   
    console.log(this.owner);
    this.newproduct={
      name:this.product.name,
      price: this.product.price,
      brand: this.product.brand,
      image: this.product.image,
      owner: this.owner
    }
    console.log("body is",this.newproduct);

    this.http.post(url,this.newproduct).subscribe((response)=>{
      console.log("this is successfull response from addproduct api",response);
      if(response['message']!=null)
      this.router.navigate(['/']);
      else
      alert(response['message']);
    },(error)=>{
      console.log("this is error from addproduct api",error);
      
    });
  
   
  }
  constructor(private http: HttpClient,private authservice : AuthService,
    private router: Router) { }

  ngOnInit() {
  }

}
