import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { ProductoProvider } from "../../providers/producto/producto";
import { Producto } from "../../modelo/producto.modelo";
import { ProductoModificarPage } from "../producto-modificar/producto-modificar";

@IonicPage()
@Component({
  selector: "page-productos-listar",
  templateUrl: "productos-listar.html"
})
export class ProductosListarPage {
  productos: Array<Producto> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private productoProvider: ProductoProvider,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    this.productoProvider.listar_producto().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  editar(producto) {
    let productoModal = this.modalCtrl.create(ProductoModificarPage, producto);
    productoModal.present();
  }
}
