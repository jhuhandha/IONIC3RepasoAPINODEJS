import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductoProvider } from '../../providers/producto/producto';
import { Categoria } from '../../modelo/categoria.modelo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductosListarPage } from '../productos-listar/productos-listar';

@IonicPage()
@Component({
  selector: 'page-productos-crear',
  templateUrl: 'productos-crear.html',
})
export class ProductosCrearPage {

  categorias : Array<Categoria> = [];
  formulario : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private productoProvide: ProductoProvider,
    private fb : FormBuilder,
    public alertCtrl: AlertController
  ) {

    this.formulario = this.fb.group({
      nombre : '',
      precio : '',
      categoria : ''
    });
  }

  ionViewDidLoad() {

    this.productoProvide.listar_categoria().subscribe(data=>{
      this.categorias = data;
      console.log("hola");
    }, err => {

    });
  }

  guardar(){
    this.productoProvide.crear_producto(this.formulario.value).subscribe(data=>{
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
