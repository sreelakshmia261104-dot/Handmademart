import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
  standalone:false
})

export class WishlistPage {

  wishlist:any[] = [];

  username:string = '';
  isLoggedIn:boolean = false;

  constructor(
    private api:ApiService,
    private router: Router
  ){}

  ionViewWillEnter(){

    // LOGIN CHECK

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

    // LOAD WISHLIST

    const data = {

      user_email:
      localStorage.getItem('email')

    };

    this.api.getWishlist(data)

    .subscribe((response:any)=>{

      console.log(response);

      this.wishlist = response;

    });

  }

  // REMOVE PRODUCT

  removeItem(id:any){

    const data = {

      id:id

    };

    this.api.removeWishlist(data)

    .subscribe((response:any)=>{

      console.log(response);

      alert("Removed");

      this.ionViewWillEnter();

    });

  }

  // CHECK USER

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

  // LOGOUT

  logout(){

    localStorage.removeItem('isLoggedIn');

    localStorage.removeItem('email');

    localStorage.removeItem('username');

    alert("Logged Out");

    this.router.navigate(['/home']);

    window.location.reload();

  }

}