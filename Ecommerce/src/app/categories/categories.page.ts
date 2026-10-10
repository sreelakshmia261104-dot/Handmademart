import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone:false
})

export class CategoriesPage implements OnInit {

  username:string = '';

  isLoggedIn:boolean = false;

  searchText:string='';

  // CATEGORY ARRAY

  categories = [

    {
      name: 'Jewelry',
      description: 'Beautiful handmade jewelry',
      image: 'assets/images/jewelry.jpg'
    },

    {
      name: 'Home Decor',
      description: 'Decorative handmade items',
      image: 'assets/images/decor1.jpg'
    },

    {
      name: 'Bags',
      description: 'Stylish handmade bags',
      image: 'assets/images/bag.jpg'
    },

    {
      name: 'Paintings',
      description: 'Creative handmade paintings',
      image: 'assets/images/paintings.jpg'
    },

    {
      name: 'Pottery',
      description: 'Traditional clay products',
      image: 'assets/images/pottery.jpg'
    },

    {
      name: 'Candles',
      description: 'Scented handmade candles',
      image: 'assets/images/candle.jpg'
    }

  ];

  // PRODUCTS ARRAY

  allProducts:any[] = [

    {
      category:'Jewelry',
      name:'Pastel Bangles',
      image:'assets/images/pastel_bangles.jpg'
    },

    {
      category:'Jewelry',
      name:'Bangles',
      image:'assets/images/bangles.jpg'
    },

    {
      category:'Jewelry',
      name:'Pastel Neck Piece',
      image:'assets/images/pastel.jpg'
    },

    {
      category:'Bags',
      name:'Blue Bag',
      image:'assets/images/blue_bag.jpg'
    },

    {
      category:'Bags',
      name:'Flower Bag',
      image:'assets/images/flowerbag.jpg'
    },

    {
      category:'Candles',
      name:'Scented Candle',
      image:'assets/images/candle1.jpg'
    },

    {
      category:'Pottery',
      name:'Cute Cups',
      image:'assets/images/pot1.jpg'
    },

    {
      category:'Paintings',
      name:'Flower Art',
      image:'assets/images/flower1.jpg'
    }

  ];

  filteredCategories:any[] = [];

  filteredProducts:any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {

    this.filteredCategories = this.categories;

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

  // SEARCH FUNCTION

  searchProducts(){

    // EMPTY SEARCH

    if(this.searchText.trim() == ''){

      this.filteredCategories =
      this.categories;

      this.filteredProducts = [];

      return;

    }

    // CATEGORY FILTER

    this.filteredCategories =
    this.categories.filter(category =>

      category.name.toLowerCase().includes(
        this.searchText.toLowerCase()
      )

    );

    // PRODUCT FILTER

    this.filteredProducts =
    this.allProducts.filter(product =>

      product.name.toLowerCase().includes(
        this.searchText.toLowerCase()
      )

    );

  }

  // OPEN PRODUCT CATEGORY

  openProductCategory(product:any){

    this.router.navigate([
      '/products',
      product.category
    ]);

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

    alert("Logged Out");

    this.router.navigate(['/home']);

    window.location.reload();

  }

}