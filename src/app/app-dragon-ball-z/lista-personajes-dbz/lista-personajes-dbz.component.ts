import { Component } from '@angular/core';
import { Personaje } from '../interface/personaje';

@Component({
  selector: 'app-lista-personajes-dbz',
  templateUrl: './lista-personajes-dbz.component.html',
  styleUrls: ['./lista-personajes-dbz.component.css']
})
export class ListaPersonajesDbzComponent {
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
  ]}
