import { Component } from '@angular/core';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  styles: []
})
export class AsideComponent {
  isAsideCollapsed = false;
  contadorNros : number = 0;

  incrementar(){
    this.contadorNros++;
  }
  decrementar(){
    if(this.contadorNros > 0){
      this.contadorNros--;
    }
  }
  
  // Declaramos explícitamente el tipo del objeto isSubMenuOpen
  isSubMenuOpen: { [key: string]: boolean } = {
    home: false,
    orders: false,
  };

  toggleAside() {
    this.isAsideCollapsed = !this.isAsideCollapsed;
    // Colapsar todos los submenús cuando se colapsa el aside
    if (this.isAsideCollapsed) {
      this.isSubMenuOpen = {
        home: false,
        orders: false,
      };
    }
  }

  toggleSubMenu(menu: string) {
    if (this.isSubMenuOpen.hasOwnProperty(menu)) {
      this.isSubMenuOpen[menu] = !this.isSubMenuOpen[menu];
    }
  }
}
