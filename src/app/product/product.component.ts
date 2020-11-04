import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public dres = [];

  constructor(private navControl: NavController) {
    this.dres = [{ image: '../assets/dresses/coats/download (4).jpg' },
    { image: '../assets/dresses/coats/download (2).jpg' },
    { image: '../assets/dresses/coats/download (1).jpg' }];
  }

  ngOnInit() { }

  back() {
    this.navControl.pop();
  }
}
