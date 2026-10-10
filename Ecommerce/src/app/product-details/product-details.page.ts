import { Component, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone:false
})

export class ProductDetailsPage {

  @Input() product:any;

  selectedImage:string='';

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(){

    this.selectedImage = this.product.gallery[0];

  }

  // CHANGE IMAGE
  changeImage(img:string){

    this.selectedImage = img;

  }

  // CLOSE MODAL
  closePopup(){

    this.modalCtrl.dismiss();

  }

}