import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ProductComponent } from './product.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppRoutingModule,
  ],
  declarations: [ProductComponent]
})
export class ProductModule {}
