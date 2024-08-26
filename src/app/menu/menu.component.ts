import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuItems = [
    { name: 'Arroz con Pollo', description: 'Arroz, culantro, pollo .', price: 8.00 },
    { name: 'Arroz con Pollo y Zanahoria', description: 'Arroz, culantro, pollo y zanahoria.', price: 10.00 },
    { name: 'Arroz con Pollo y Espinacas', description: 'Arroz, culantro, pollo y espinacas.', price: 12.00 },
    { name: 'Ensalada de Zanahoria y Espinacas', description: 'Zanahoria, cebolla, tomate, perejil y espinacas.', price: 11.00 },
    { name: 'Ensalada de Zanahoria', description: 'Zanahoria, cebolla, tomate, perejil.', price: 10.00 },   
    { name: 'Pasta Carbonara', description: 'Pasta, salsa, tomato, cebolla.', price: 15.00 },
    { name: 'Ensalada de Espinacas', description: 'Espinacas, cebolla, tomate, perejil', price: 9.0},
    { name: 'Ensalada de Tomatillo', description: 'Tomatillo, cebolla, tomate, perejil.', price: 11.00 },
    {name: 'Ensalada de Cebolla', description: 'Cebolla, tomate, perejil.', price: 7.00},
    
  ];
}
