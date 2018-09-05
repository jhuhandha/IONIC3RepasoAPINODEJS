import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductoProvider } from '../../providers/producto/producto';
import { Categoria } from '../../modelo/categoria.modelo';
import { ProductosListarPage } from '../productos-listar/productos-listar';

/**
 * Generated class for the ProductoModificarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto-modificar',
  templateUrl: 'producto-modificar.html',
})
export class ProductoModificarPage {

  categorias : Array<Categoria> = [];
  formulario : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private productoProvide: ProductoProvider,
    private fb : FormBuilder,
    public alertCtrl: AlertController
  ) {
      console.log(this.navParams.data);
      this.formulario = this.fb.group({
        codigo : this.navParams.data._id,
        nombre : this.navParams.data.nombre,
        precio : this.navParams.data.precio,
        categoria : this.navParams.data.categoria._id,
      });
  }

  ionViewDidLoad() {
    this.productoProvide.listar_categoria().subscribe(data=>{
      this.categorias = data;
      console.log("hola");
    }, err => {

    });
  }

  modificar(){
    this.productoProvide.modificar_producto(this.formulario.value, this.formulario.value.codigo).subscribe(data=>{
      if(data.ok == true){
        const alert = this.alertCtrl.create({
          title: 'New Friend!',
          subTitle: 'Felicidades',
          buttons: [{
            text : "OK",
            handler: data => {
              this.navCtrl.setRoot(ProductosListarPage);
            }
          }]
        });
        alert.present();
        
      }
    }, err => {

    })
  }

}
