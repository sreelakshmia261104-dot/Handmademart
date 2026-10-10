import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:false
})

export class HomePage  {
 images:string[] = [
    'assets/images/decor.jpg',
    'assets/images/pots.jpg',
    'assets/images/dolls.jpg'
  ];

  // CURRENT IMAGE INDEX
  currentIndex:number = 0;
username:string = '';
isLoggedIn:boolean = false;
  constructor(private router: Router) { }
  ngOnInit(){

  setInterval(() => {

    this.currentIndex++;

    if(this.currentIndex >= this.images.length){
      this.currentIndex = 0;
    }

    const slider:any = document.getElementById('slider');

    slider.src = this.images[this.currentIndex];

  },6000);

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