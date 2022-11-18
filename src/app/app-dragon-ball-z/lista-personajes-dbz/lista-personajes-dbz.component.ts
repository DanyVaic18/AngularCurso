import { Component,Input } from '@angular/core';
import { Personaje } from '../interface/personaje';

@Component({
  selector: 'app-lista-personajes-dbz',
  templateUrl: './lista-personajes-dbz.component.html',
  styleUrls: ['./lista-personajes-dbz.component.css']
})
export class ListaPersonajesDbzComponent {
  @Input() personajesDbz : Personaje[] = []
}
