import {Component} from "@angular/core";
import { AuthService } from '../auth.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignUpComponent
{
    constructor(private as: AuthService, private http: HttpClient,private router: Router){

    }
    user={
        email:null,
        name: null,
        password: null
    }
    register()
    {
        //this.user=this.as.user;
        console.log("details from the input",this.user);
        var url="https://learningmeanwithashu.herokuapp.com/api/register";
        this.http.post(url,this.user).subscribe((response)=>{
            console.log("this is the response from signup api ", response);

            if(response['message']=='User Registered')
           this.router.navigate(['/login']);
           else alert(response['message']);
           /*  if(response['message']=='User Already Exists')
            alert('User Already Exists');

            if(response['message']==' Please Provide Details')
            alert('Please Provide Details'); */
           
        },(error)=>{
            alert("Failed Signup,Try again")
            console.log("this is the error from signup api",error)
        });
    
    }

}