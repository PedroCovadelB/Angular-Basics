import { Injectable } from "@angular/core";
import { Personaje } from "../interface/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000,
        },
        {
          nombre: 'Vegeta',
          poder: 8500,
        },
      ];

    get personajes(){
        return [...this._personajes]
    }

    constructor(){}

    agregarPersonaje(nuevo:Personaje){
        this._personajes.push(nuevo)
    }

}