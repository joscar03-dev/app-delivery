import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  name: string = '';
  email: string = '';
  message: string = '';

  sendMessage() {
    // Lógica para enviar el mensaje
    console.log(`Nombre: ${this.name}, Email: ${this.email}, Mensaje: ${this.message}`);
  }
}
