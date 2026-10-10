import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone:false
})
export class RegisterPage implements OnInit {

  username:string='';
  mobile:string='';
  emailregister:string='';
  createpassword:string='';
  confirmpassword:string='';

  constructor(private router: Router,private http: HttpClient, private api: ApiService) { }
clear(){
    this.username='';
    this.mobile='';
    this.emailregister='';
    this.createpassword='';
    this.confirmpassword='';
}

  register(){

  if(this.username==''||this.mobile==''||this.emailregister==''||this.createpassword==''||this.confirmpassword==''){

    alert("Please fill all the fields");

  }

  else if (!this.emailregister.includes('@')) {

    alert("Enter valid email");

  }

  else if (!/^[0-9]{10}$/.test(this.mobile)) {

    alert("Enter valid mobile number");

  }

  else if (this.createpassword.length < 6) {

    alert("Password must contain minimum 6 characters");

  }

  else if (this.createpassword != this.confirmpassword) {

    alert("Passwords do not match");

  }

  else{

    const data = {

      username:this.username,
      mobile:this.mobile,
      email:this.emailregister,
      password:this.createpassword

    };

    // CALL SERVICE
    this.api.register(data)

    .subscribe((response:any)=>{

  console.log(response);

  // STORE USER DETAILS

  localStorage.setItem(
    'userId',
    response.id
  );

  localStorage.setItem(
    'username',
    response.username
  );

  localStorage.setItem(
    'email',
    response.email
  );

  localStorage.setItem(
    'mobile',
    response.mobile
  );

  alert("Signup Successful");

  this.router.navigate(['/login']);

},

    error=>{

      console.log(error);

      alert("Registration Failed");

    });

  }

}
  ngOnInit() {
    
  }

}