import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeCoponent {
  nombre: string = 'Iron-Man';
  edad: number = 30;

  get nombreCApitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre}`;
  }

  obtenerEdad = (): string => {
    return `${this.edad}`;
  };

  cambiarNombre (): void{
    this.nombre = 'Spider-Man'
  }
  cambiarEdad (): void{
    this.edad = 60
  }
}
