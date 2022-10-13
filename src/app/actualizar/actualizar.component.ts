import { ProductosService } from './../productos.service';
import { Producto } from './../models/Producto';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css'],
})
export class ActualizarComponent implements OnInit {
  producto?: Producto;

  productoForm!: FormGroup;
  constructor(
    private productoService: ProductosService,
    private fb: FormBuilder
  ) {
    this.productoForm = this.fb.group({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      precio: new FormControl(''),
      imagen: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  enviarInfo() {
    this.producto = this.productoForm.value;

    
    console.log(this.producto);
  }
}
