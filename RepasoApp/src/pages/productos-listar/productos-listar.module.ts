import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosListarPage } from './productos-listar';

@NgModule({
  declarations: [
    ProductosListarPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductosListarPage),
  ],
})
export class ProductosListarPageModule {}
