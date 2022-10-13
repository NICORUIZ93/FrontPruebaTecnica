import { Producto } from '../models/Producto';
import { ProductosService } from './../productos.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css'],
})
export class AdministracionComponent implements OnInit {
  producto: Producto[] = [];
  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProductos().subscribe((data) => {
      this.producto = data;
    });
  }
  newProductos(producto: Producto) {
    this.productoService.newProductos(producto);
  }
  eliminarProductos(id: number) {
    this.productoService.eliminarProductos(id).subscribe();
  }
  actualizarProductos(id: number, producto: Producto) {
    this.productoService.actualizarProductos(id, producto);
  }
}
