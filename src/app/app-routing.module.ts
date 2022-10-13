import { ActualizarComponent } from './actualizar/actualizar.component';
import { ProductosComponent } from './productos/productos.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'administracion',
    component: AdministracionComponent,
  },
  {
    path: 'actualizar',
    component: ActualizarComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
