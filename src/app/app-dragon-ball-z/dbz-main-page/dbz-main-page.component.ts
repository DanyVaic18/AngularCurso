import { Component } from '@angular/core';

import { Personaje } from '../interface/personaje';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './dbz-main-page.component.html',
  styleUrls: ['./dbz-main-page.component.css'],
})



export class DbzMainPageComponent {
  personajesDbz:Personaje[] = [
    {
      nombre:"Goku",
      poder:200,
    },
    {
      nombre:"Vegeta",
      poder:180,
    },
    {
      nombre:"Frezzer",
      poder:210,
    },
  ]

  caracteristicas: Personaje = {
    nombre: '',
    poder: '',
  };

  // cambiarNombre(ev:any){
  //   console.log(ev.target.value)
  // }

}
