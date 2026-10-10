import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone:false
})
export class ContactPage implements OnInit {

  constructor(private router: Router) { }
username:string = '';
isLoggedIn:boolean = false;
  ngOnInit() {
  }ionViewWillEnter(){

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
