import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    heroes = ['Spiderman','Ironman','Thor','Hulk','Capitan America'];
    heroeBorrado = ''

    borrarHeroe(){
      this.heroeBorrado = this.heroes.shift() || '';
    }
}
