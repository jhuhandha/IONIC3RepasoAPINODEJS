import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosCrearPage } from './productos-crear';

@NgModule({
  declarations: [
    ProductosCrearPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductosCrearPage),
  ],
})
export class ProductosCrearPageModule {}
