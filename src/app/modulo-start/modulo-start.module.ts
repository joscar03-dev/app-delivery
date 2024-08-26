import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { PrincipalComponent } from './principal/principal.component';
import { PedidosModule } from "../pedidos/pedidos.module";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AsideComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    PedidosModule,
    RouterModule,
], 
  exports: [
    AsideComponent,
    PrincipalComponent,
  ]
})
export class ModuloStartModule { }
