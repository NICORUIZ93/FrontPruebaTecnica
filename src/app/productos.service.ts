import { Observable } from 'rxjs';
import { Producto } from './models/Producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private Http: HttpClient) {}

  getProductos() {
    return this.Http.get<Producto[]>(environment.productos + 'getProductos');
  }
  newProductos(producto: Producto): Observable<Producto> {
    const headers = { 'content-type': 'application/json' };
    return this.Http.post<any>(
      environment.productos + 'newProducto',
      producto,
      { headers: headers }
    );
  }
  eliminarProductos(id: number) {
    console.log(id);

    return this.Http.delete(environment.productos + `deleteProducto/${id}`);
  }
  actualizarProductos(id: number, producto: Producto) {
    return this.Http.put(environment.productos + `updateProducto/${id}`, {
      producto,
    });
  }
}
