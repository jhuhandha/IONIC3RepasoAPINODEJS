import { Component } from '@angular/core';
import { ProductosListarPage } from '../productos-listar/productos-listar';
import { ProductosCrearPage } from '../productos-crear/productos-crear';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProductosListarPage;
  tab2Root = ProductosCrearPage;

  constructor() {

  }
}
