import { AdministracionComponent } from './../administracion/administracion.component';
import { ProductosService } from './../productos.service';
import { Producto } from './../models/Producto';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css'],
})
export class ActualizarComponent implements OnInit {
  productoF?: Producto;
  producto?: Producto;
  imagen64!: string | ArrayBuffer | null;
  productoForm!: FormGroup;
  constructor(
    private productoService: ProductosService,
    private fb: FormBuilder,private router: Router
  ) {
    this.productoForm = this.fb.group({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      precio: new FormControl(''),
      imagen: new FormControl(''),
    });
  }

  ngOnInit(): void {

  }

  enviarInfo() {
    this.productoF = this.productoForm.value;
    this.producto = new Producto(
      0,
      this.productoF?.nombre,
      this.productoF?.descripcion,
      this.productoF?.precio,
      this.imagen64
    );
    this.productoService.newProductos(this.producto).subscribe((data) => {
      console.log(data);
    });

    this.router.navigate(['administracion']);
  }

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imagen64 = reader.result;
    };
  }
}
