import { Producto } from '../models/Producto';
import { ProductosService } from './../productos.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';

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
  ngAfterContentInit() {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProductos().subscribe((data) => {
      this.producto = data;
    });
  }
  newProductos(producto: Producto) {
    this.productoService.newProductos(producto).subscribe();
  }
  eliminarProductos(id: number) {
    this.productoService.eliminarProductos(id).subscribe();
  }
  actualizarProductos(id: number, producto: Producto) {
    this.productoService.actualizarProductos(id, producto).subscribe();
  }
}
