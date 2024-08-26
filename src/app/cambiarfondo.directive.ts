import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCambiarfondo]',
})
export class CambiarfondoDirective {
  constructor(elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'red';
    elem.nativeElement.style.color = 'white';
  }
}
