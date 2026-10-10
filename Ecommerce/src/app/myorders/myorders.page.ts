import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.page.html',
  styleUrls: ['./myorders.page.scss'],
  standalone:false
})

export class MyordersPage implements OnInit {

  orders:any[] = [];
  username:string = '';
isLoggedIn:boolean = false;

  constructor(private api:ApiService,private router: Router,) { }

  ngOnInit() {

    const data = {

      user_email:
      localStorage.getItem('email')

    };

    this.api.getMyOrders(data)

    .subscribe((response:any)=>{

      console.log(response);

      this.orders = response;

    });

  }
  ionViewWillEnter(){

  // CHECK LOGIN STATUS

  const loginStatus = localStorage.getItem('isLoggedIn');

  if(loginStatus == 'true'){

    this.isLoggedIn = true;

    this.username = localStorage.getItem('username') || '';

  }
  else{

    this.isLoggedIn = false;

  }

}
  checkUser(){

    const user = localStorage.getItem('email');

    // IF USER ALREADY REGISTERED
    if(user){

      this.router.navigate(['/login']);

    }

    // NEW USER
    else{

      this.router.navigate(['/register']);

    }

  }
  logout(){

  // CLEAR STORAGE
  localStorage.removeItem('isLoggedIn');

  localStorage.removeItem('email');

  alert("Logged Out");

  // REDIRECT HOME
  this.router.navigate(['/home']);

  // REFRESH PAGE
  window.location.reload();

}

}