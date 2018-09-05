import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../../modelo/producto.modelo';
import { Categoria } from '../../modelo/categoria.modelo';
import { URL } from '../../config/variables.config';

@Injectable()
export class ProductoProvider {

  constructor(public http: HttpClient) {
  }

  listar_producto() : Observable<Array<Producto>>{
    return this.http.get<Array<Producto>>(`${URL}/producto`);
  }

  listar_categoria() : Observable<Array<Categoria>>{
    return this.http.get<Array<Categoria>>(`${URL}/producto/categoria`);
  }

  crear_producto(producto : Producto) : Observable<any>{
    return this.http.post(`${URL}/producto`, producto);
  }

  modificar_producto(producto : Producto, id) : Observable<any>{
    return this.http.put(`${URL}/producto/${id}`, producto);
  }

}
