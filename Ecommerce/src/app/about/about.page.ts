import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone:false
})

export class AboutPage implements OnInit {

  username:string='';

  isLoggedIn:boolean=false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){

    const loginStatus =
    localStorage.getItem('isLoggedIn');

    if(loginStatus == 'true'){

      this.isLoggedIn = true;

      this.username =
      localStorage.getItem('username') || '';

    }

    else{

      this.isLoggedIn = false;

    }

  }

  checkUser(){

    const user =
    localStorage.getItem('email');

    if(user){

      this.router.navigate(['/login']);

    }

    else{

      this.router.navigate(['/register']);

    }

  }

  logout(){

    localStorage.removeItem('isLoggedIn');

    localStorage.removeItem('email');

    localStorage.removeItem('username');

    alert("Logged Out");

    this.router.navigate(['/home']);

  }

}