import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoModificarPage } from './producto-modificar';

@NgModule({
  declarations: [
    ProductoModificarPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductoModificarPage),
  ],
})
export class ProductoModificarPageModule {}
