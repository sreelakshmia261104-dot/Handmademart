import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ProductDetailsPage }
from '../product-details/product-details.page';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../services/api';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone:false
})

export class ProductsPage implements OnInit {

  category:string='';
searchTerm:string='';
  username:string = '';

  isLoggedIn:boolean = false;
filteredProducts:any[] = [];
  allProducts:any[] = [

    // JEWELRY

    {
      category:'Jewelry',
      name:'Pastel Neck Piece',
      price:300,
      image:'assets/images/pastel.jpg',
      description:'Beautiful handmade necklace'
    },

    {
      category:'Jewelry',
      name:'Resin Blue Earrings',
      price:200,
      image:'assets/images/resin_blue.jpg',
      description:'Elegant silver earrings'
    },
     {
      category:'Jewelry',
      name:'Bangles',
      price:500,
      image:'assets/images/bangles.jpg',
      description:'Elegant silver earrings'
    },
     {
      category:'Jewelry',
      name:'Rose Resin Neck Piece',
      price:450,
      image:'assets/images/rose_resin.jpg',
      description:'Elegant silver earrings'
    },
     {
      category:'Jewelry',
      name:'Blue Gold Neck Piece',
      price:150,
      image:'assets/images/blue.jpg',
      description:'Elegant silver earrings'
    },
     {
      category:'Jewelry',
      name:'Black Gold Neck Piece',
      price:600,
      image:'assets/images/black_gold.jpg',
      description:'Elegant silver earrings'
    },
     {
      category:'Jewelry',
      name:'Earrings',
      price:90,
      image:'assets/images/blue_earrings.jpg',
      description:'Elegant silver earrings'
    },
     {
      category:'Jewelry',
      name:'Mini Neck Chains',
      price:450,
      image:'assets/images/mini_dollars.jpg',
      description:'Elegant silver earrings'
    },
     {
      category:'Jewelry',
      name:'Pastel Bangles',
      price:600,
      image:'assets/images/pastel_bangles.jpg',
      description:'Elegant silver earrings'
    },
     {
      category:'Jewelry',
      name:'Pink Resin Jewel Set',
      price:500,
      image:'assets/images/pink_resin_set.jpg',
      description:'Elegant silver earrings'
    },
     {
      category:'Jewelry',
      name:'Purple Chain and Earring Set',
      price:300,
      image:'assets/images/purple_set.jpg',
      description:'Elegant silver earrings'
    },
     {
      category:'Jewelry',
      name:'Sunflower Neck Chain',
      price:390,
      image:'assets/images/sunflower.jpg',
      description:'Elegant silver earrings'
    },

     

//Home Decor
 {
      category:'Home Decor',
      name:'Art',
      price:800,
      image:'assets/images/art1.jpg',
      description:'Premium handmade bag'
    },

    {
      category:'Home Decor',
      name:'Art',
      price:600,
      image:'assets/images/art2.jpg',
      description:'Stylish travel handbag'
    },
 {
      category:'Home Decor',
      name:'decor',
      price:450,
      image:'assets/images/decor2.jpg',
      description:'Stylish travel handbag'
    },

    {
      category:'Home Decor',
      name:'Bottle',
      price:650,
      image:'assets/images/bottle.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Home Decor',
      name:'Decor',
      price:250,
      image:'assets/images/decor3.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Home Decor',
      name:'Decor',
      price:750,
      image:'assets/images/decor4.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Home Decor',
      name:'Dream',
      price:800,
      image:'assets/images/dream1.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Home Decor',
      name:'Dream',
      price:1500,
      image:'assets/images/dream2.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Home Decor',
      name:'lamp',
      price:750,
      image:'assets/images/lamp1.jpg',
      description:'Stylish travel handbag'
    },
{
      category:'Home Decor',
      name:'lamp',
      price:1300,
      image:'assets/images/lamp2.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Home Decor',
      name:'lamp',
      price:900,
      image:'assets/images/lamp3.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Home Decor',
      name:'mirror',
      price:550,
      image:'assets/images/mirror.jpg',
      description:'Stylish travel handbag'
    },
    // BAGS

    {
      category:'Bags',
      name:'Bag',
      price:800,
      image:'assets/images/bagss.jpg',
      description:'Premium handmade bag'
    },

    {
      category:'Bags',
      name:'Bag',
      price:900,
      image:'assets/images/bagsss.jpg',
      description:'Stylish travel handbag'
    },
{
      category:'Bags',
      name:'Blue Bag',
      price:1200,
      image:'assets/images/blue_bag.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Bags',
      name:'Cat Bag',
      price:500,
      image:'assets/images/catsbag.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Bags',
      name:'College Bag',
      price:1400,
      image:'assets/images/clg bag.jpg',
      description:'Stylish travel handbag'
    },
   
    {
      category:'Bags',
      name:'Flower Bag',
      price:1500,
      image:'assets/images/flowerbag.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Bags',
      name:'Jute Bag',
      price:400,
      image:'assets/images/jute girl.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Bags',
      name:'Pouch',
      price:200,
      image:'assets/images/pouch.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Bags',
      name:'Sunflower Bag',
      price:400,
      image:'assets/images/sunflower_bag.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Bags',
      name:'Toto',
      price:900,
      image:'assets/images/bagsss.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Bags',
      name:'White Toto Bag',
      price:1000,
      image:'assets/images/whitepink.jpg',
      description:'Stylish travel handbag'
    },
    {
      category:'Bags',
      name:'Chrochet Bag',
      price:300,
      image:'assets/images/crochet.jpg',
      description:'Stylish travel handbag'
    },
    // PAINTINGS

    {
      category:'Paintings',
      name:'Sunset',
      price:1500,
      image:'assets/images/art3.jpg',
      description:'Hand-painted artwork'
    },

    {
      category:'Paintings',
      name:'Art',
      price:2500,
      image:'assets/images/art4.jpg',
      description:'Modern abstract painting'
    },

    {
      category:'Paintings',
      name:'Butterfly Art',
      price:3500,
      image:'assets/images/butterfly.jpg',
      description:'Modern abstract painting'
    },
    {
      category:'Paintings',
      name:'Flower Art',
      price:1800,
      image:'assets/images/flower1.jpg',
      description:'Modern abstract painting'
    },
    {
      category:'Paintings',
      name:'Flower Art',
      price:1400,
      image:'assets/images/flower2.jpg',
      description:'Modern abstract painting'
    },
    {
      category:'Paintings',
      name:'Lord Krishna',
      price:3500,
      image:'assets/images/krishna.jpg',
      description:'Modern abstract painting'
    },
    {
      category:'Paintings',
      name:'Lotus Art',
      price:1200,
      image:'assets/images/lotus.jpg',
      description:'Modern abstract painting'
    },
    {
      category:'Paintings',
      name:'Nature Art',
      price:590,
      image:'assets/images/nature.jpg',
      description:'Modern abstract painting'
    },
    {
      category:'Paintings',
      name:'Sea Art',
      price:2500,
      image:'assets/images/sea_pearl.jpg',
      description:'Modern abstract painting'
    },
    {
      category:'Paintings',
      name:'Shell Art',
      price:970,
      image:'assets/images/shell1.jpg',
      description:'Modern abstract painting'
    },
    {
      category:'Paintings',
      name:'Shell Art',
      price:1200,
      image:'assets/images/shell2.jpg',
      description:'Modern abstract painting'
    },
    {
      category:'Paintings',
      name:'Dark Wavy Art',
      price:3500,
      image:'assets/images/wavy.jpg',
      description:'Modern abstract painting'
    },
    // POTTERY

    {
      category:'Pottery',
      name:'Cute Cups',
      price: 100,
      image:'assets/images/pot1.jpg',
      description:'Traditional clay pottery'
    },
{
      category:'Pottery',
      name:'Pot',
      price:400,
      image:'assets/images/pot2.jpg',
      description:'Traditional clay pottery'
    },
{
      category:'Pottery',
      name:'Pot',
      price:400,
      image:'assets/images/pot3.jpg',
      description:'Traditional clay pottery'
    },
    {
      category:'Pottery',
      name:'Pot',
      price:400,
      image:'assets/images/pot4.jpg',
      description:'Traditional clay pottery'
    },
    {
      category:'Pottery',
      name:'Pot',
      price:400,
      image:'assets/images/pot5.jpg',
      description:'Traditional clay pottery'
    },
    {
      category:'Pottery',
      name:'Pot',
      price:400,
      image:'assets/images/pot6.jpg',
      description:'Traditional clay pottery'
    },
    {
      category:'Pottery',
      name:'Pot',
      price:400,
      image:'assets/images/pot7.jpg',
      description:'Traditional clay pottery'
    },
    {
      category:'Pottery',
      name:'Pot',
      price:400,
      image:'assets/images/pot8.jpg',
      description:'Traditional clay pottery'
    },
    {
      category:'Pottery',
      name:'Pot',
      price:400,
      image:'assets/images/pot9.jpg',
      description:'Traditional clay pottery'
    },
    {
      category:'Pottery',
      name:'Pot',
      price:400,
      image:'assets/images/pot10.jpg',
      description:'Traditional clay pottery'
    },
    {
      category:'Pottery',
      name:'Pot',
      price:400,
      image:'assets/images/pot11.jpg',
      description:'Traditional clay pottery'
    },
    {
      category:'Pottery',
      name:'Pot',
      price:400,
      image:'assets/images/pot12.jpg',
      description:'Traditional clay pottery'
    },
    // CANDLES

    {
      category:'Candles',
      name:'Scented Candle',
      price:350,
      image:'assets/images/candle1.jpg',
      description:'Relaxing scented candle'
    },
   {
      category:'Candles',
      name:'Scented Candle',
      price:350,
      image:'assets/images/candle2.jpg',
      description:'Relaxing scented candle'
    },
   {
      category:'Candles',
      name:'Scented Candle',
      price:350,
      image:'assets/images/candle3.jpg',
      description:'Relaxing scented candle'
    },
   {
      category:'Candles',
      name:'Scented Candle',
      price:350,
      image:'assets/images/candle4.jpg',
      description:'Relaxing scented candle'
    },
   {
      category:'Candles',
      name:'Scented Candle',
      price:350,
      image:'assets/images/candle5.jpg',
      description:'Relaxing scented candle'
    },
   {
      category:'Candles',
      name:'Scented Candle',
      price:350,
      image:'assets/images/candle6.jpg',
      description:'Relaxing scented candle'
    },
   {
      category:'Candles',
      name:'Scented Candle',
      price:350,
      image:'assets/images/candle7.jpg',
      description:'Relaxing scented candle'
    },
   {
      category:'Candles',
      name:'Scented Candle',
      price:350,
      image:'assets/images/candle8.jpg',
      description:'Relaxing scented candle'
    },
   {
      category:'Candles',
      name:'Scented Candle',
      price:350,
      image:'assets/images/candle9.jpg',
      description:'Relaxing scented candle'
    },
   {
      category:'Candles',
      name:'Scented Candle',
      price:350,
      image:'assets/images/candle10.jpg',
      description:'Relaxing scented candle'
    },
   {
      category:'Candles',
      name:'Scented Candle',
      price:350,
      image:'assets/images/candle11.jpg',
      description:'Relaxing scented candle'
    },
   {
      category:'Candles',
      name:'Scented Candle',
      price:350,
      image:'assets/images/candle12.jpg',
      description:'Relaxing scented candle'
    },

  ];

  products:any[] = [];
buyNow(item:any){

  localStorage.setItem(
    'selectedProduct',
    JSON.stringify(item)
  );

  this.router.navigate(['/order']);

}
  constructor(private route: ActivatedRoute,
  private modalCtrl: ModalController,private router: Router,private api: ApiService) { }
async openProduct(product:any){

  const modal = await this.modalCtrl.create({

    component: ProductDetailsPage,

    componentProps:{
      product:product
    }

  });

  return await modal.present();

}
  ngOnInit() {



  this.category =
  this.route.snapshot.paramMap.get('category') || '';

  this.products = this.allProducts.filter(item =>

    item.category == this.category

  );

  // IMPORTANT

  this.filteredProducts = this.products;


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
 searchProducts(){

  if(this.searchTerm.trim() == ''){

    this.filteredProducts = this.products;

  }

  else{

    this.filteredProducts =
    this.products.filter((item:any)=>

      item.name.toLowerCase().includes(

        this.searchTerm.toLowerCase()

      )

    );

  }

}

logout(){

  localStorage.removeItem('isLoggedIn');

  localStorage.removeItem('email');

  alert("Logged Out");

  this.router.navigate(['/home']);

}
  addToWishlist(product:any){

  // CHECK LOGIN

  const email = localStorage.getItem('email');

  if(!email){

    alert("Please Login First");

    return;

  }

  const data = {

    user_email:email,

    product_name:product.name,

    product_price:product.price,

    description:product.description,

    productimage:product.image

  };

  this.api.addWishlist(data)

  .subscribe((response:any)=>{

    console.log(response);

    alert("Added To Wishlist ❤️");

  },

  error=>{

    console.log(error);

    alert("Wishlist Failed");

  });

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
}