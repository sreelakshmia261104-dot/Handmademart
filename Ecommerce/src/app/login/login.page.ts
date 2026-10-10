import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})

export class LoginPage implements OnInit {

  email:string='';
  password:string='';

  constructor(
    private router: Router,
    private api: ApiService
  ) { }

 
  ngOnInit() {
  }
 login(){

  const data = {

    email:this.email,
    password:this.password

  };

  this.api.login(data)

  .subscribe((response:any)=>{

    console.log(response);

    // STORE LOGIN STATUS
    localStorage.setItem(
      'isLoggedIn',
      'true'
    );

    // STORE USER DATA
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

    alert("Login Successful");

    // REDIRECT
    this.router.navigate(['/home']);

  },

  error=>{

    console.log(error);

    alert("Invalid Email or Password");

  });

}

}