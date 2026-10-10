import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { ApiService } from '../services/api';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
  standalone:false
})

export class OrderPage implements OnInit {

  product:any = {};
username:string = '';
isLoggedIn:boolean = false;
  buyername:string='';
  address:string='';
  phone:string='';

  constructor(
    private api: ApiService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.product = JSON.parse(

      localStorage.getItem('selectedProduct') || '{}'

    );

  }

  payNow(){

    if(
      this.buyername == '' ||
      this.address == '' ||
      this.phone == ''
    ){

      alert("Please fill all fields");

    }

    else{

      this.http.get(
        this.product.image,
        { responseType:'blob' }
      )

      .subscribe((imageBlob:any)=>{

        const formData = new FormData();

        formData.append(
          'user_email',
          localStorage.getItem('email') || ''
        );

        formData.append(
          'product_name',
          this.product.name
        );

        formData.append(
          'product_price',
          this.product.price
        );

        formData.append(
          'buyer_name',
          this.buyername
        );

        formData.append(
          'address',
          this.address
        );

        formData.append(
          'phone',
          this.phone
        );

        formData.append(
          'productimage',
          imageBlob,
          this.product.name + '.jpg'
        );

        this.api.placeOrder(formData)

        .subscribe((response:any)=>{

          console.log(response);

          alert("Order Placed Successfully");

          this.router.navigate(['/home']);

        },

        error=>{

          console.log(error);

          alert("Order Failed");

        });

      });

    }

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