import { Component } from "@angular/core";
import { AuthService } from '../auth.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'
//import { $ } from 'protractor';

declare var $:any

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
    
})

export class LoginComponent{
   

    type="text";

    constructor(private authservice: AuthService,private http: HttpClient,
        private router:Router){

          if(localStorage.getItem('isLoggegdIn'))
          {
            this.router.navigate(['/']);
          }

    }
    
   email
   password

    login(){
        var obj={
            
            email:this.email,
            password:this.password

        }
        var url="https://learningmeanwithashu.herokuapp.com/api/login";
        this.http.post(url,obj).subscribe((response)=>{
           // $('#login').modal('toggle');
            console.log("this is Successfull Login Message from login api", response);
            this.authservice.user.email=obj.email;
            this.authservice.user.name=response['name'];
            console.log("login page saving user name", this.authservice.user);
            if(response['token'])
            {
                localStorage.setItem("isLoggedIn" , "true");
                localStorage.setItem("name", response['name']);
                localStorage.setItem("email", response['email']);
                this.router.navigate(['/']);
            }
            else alert(response['message']);

            
            //$('#login').modal('toggle');
        },(error)=>{
            alert('login failed, try again');
            console.log("this is the error response from login api",error)
        });
        //console.log("checking what is written in authservice...", this.authservice);
        //this.authservice.user=obj;
        //console.log("checking what is written in authservice after updation....", this.authservice);
       
    }
}