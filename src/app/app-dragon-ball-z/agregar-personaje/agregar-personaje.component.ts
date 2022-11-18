import { Component, Input } from '@angular/core';
import { Personaje } from '../interface/personaje';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent {

  @Input() caracteristicas:Personaje = {
    nombre:"",
    poder:""
  }
  // @Input() personajeDbz:Personaje[] = []
  agregar() {
    const caracteristicasIniciales:Personaje = {
      nombre: '',
      poder: '',
    }
    if(this.caracteristicas.nombre.trim() === ""){return;}else{
      // this.personajesDbz.push(this.caracteristicas)
      this.caracteristicas = caracteristicasIniciales
    }

  }

}
