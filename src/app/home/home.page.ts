import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public headerData = [];
  public dress = [];

  constructor() {

  }

  ionViewWillEnter() {
    this.headerData = ['Coats', 'Dresses', 'Jersey', 'Pants'];
    this.dress = [{ image: '../assets/dresses/coats/download1.jpg', name: 'Winter Coat', price: '$12' },
    { image: '../assets/dresses/coats/download2.jpg', name: 'Woolen Coat', price: '$20' },
    { image: '../assets/dresses/coats/images.jpg', name: 'Long Coat', price: '$45' },
    { image: '../assets/dresses/coats/download4.jpg', name: 'Short Coat', price: '$40' },
    { image: '../assets/dresses/coats/download.jpg', name: 'Normal Coat', price: '$41' },
    ];
  }

  // slideOpts = {
  //   zoom: false
  // };

  // cardClick(){
  //   this.route.navigate(['/product'])
  // }

}
