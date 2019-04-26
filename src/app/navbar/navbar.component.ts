import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn
  
  username

  ngDoCheck()
  {
    this.isLoggedIn=localStorage.getItem("isLoggedIn");
    this.username=localStorage.getItem("name");
  }
  constructor(private http:HttpClient) { 
    this.isLoggedIn=localStorage.getItem("isLoggedIn");
    this.username=localStorage.getItem("name");
  }
  logout()
  {
    console.log('successfully logout');
    localStorage.clear();
  }

  ngOnInit() {
  }

  deleteAccount()
  {
    var url="https://learningmeanwithashu.herokuapp.com/api/deleteuser";
    this.http.post(url,{email: 'mitalihans@gmail.com'}).subscribe((response)=>{
      this.logout()
    },(error)=>{
        console.log('error in deleting account is...',error);
      });

  }

}
