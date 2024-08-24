import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloStartModule } from './modulo-start/modulo-start.module';
import { PedidosModule } from './pedidos/pedidos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Other modules
    ModuloStartModule,
    PedidosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
