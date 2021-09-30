import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  titulo = 'Contador App';
  numero = 10;
  base = 5;

  acumular(valor: number){
   this.numero += valor; 
  }
}
