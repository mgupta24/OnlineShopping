import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products
  toremoveproduct={
    email:null,
    productid:null
  }
  totalprice=0;
  email={
    email:null
  }
  constructor(private http:HttpClient) { 
    var url="https://learningmeanwithashu.herokuapp.com/api/cart";
    this.email.email=localStorage.getItem('email');
   
    this.http.post(url,this.email).subscribe((response)=>{
      console.log('successull.......',response);
      console.log(response['data']);

      this.toremoveproduct.productid=response['data']['productid'];
      this.products=response['data'];
      console.log('price is....',this.products);

      for(let entry of this.products)
      {
        this.totalprice=this.totalprice+ entry.product.price;
        console.log('price is...!!!',this.totalprice)
      }
    //this.totalprice=this.totalprice+ response['data']['product']['price'];
    

      console.log("products in cart are.....", this.products);

    },(error)=>{
      console.log('error is....',error);
    });
  }

  ngOnInit() {
  }

  removefromcart(removeproduct,pid)
  {
    this.totalprice=this.totalprice-removeproduct.price;
    this.products.splice(this.products.indexOf(removeproduct),1)
    var url="https://learningmeanwithashu.herokuapp.com/api/removefromcart";

    console.log('removing product is....', removeproduct,pid);
    this.toremoveproduct.productid=pid;
    this.toremoveproduct.email=localStorage.getItem('email');

    console.log('removing product json is....', this.toremoveproduct);
    this.http.post(url,this.toremoveproduct).subscribe((response)=>{
      console.log("success remove",response);
    },(error)=>{
      console.log('error remove',error);
    });

  }

}
