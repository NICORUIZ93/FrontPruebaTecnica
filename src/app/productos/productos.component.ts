import { Producto } from '../models/Producto';
import { ProductosService } from '../productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  producto: Producto[] = [];

  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((data) => {
      this.producto = data;
      console.log(this.producto);
    });
  }
}
