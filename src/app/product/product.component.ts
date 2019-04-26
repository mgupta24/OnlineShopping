import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

@Input() product;
 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  productInfo()
  {
    
    console.log("product info",this.product);
    var url ='/productdetail/'+this.product.productid;
    this.router.navigate([url]);
   
    
  }

}
