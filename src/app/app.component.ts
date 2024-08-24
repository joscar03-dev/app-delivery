import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_delivery';
  //hacer una funcion que sea un contador
  count = 0;
  //hacer una funcion que sea un boton para incrementar el contador
  incrementCount() {
    this.count++;
  }
}
