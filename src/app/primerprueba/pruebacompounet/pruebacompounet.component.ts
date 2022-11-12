import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebacompounet',
  templateUrl: './pruebacompounet.component.html',
  // styleUrls: ['./pruebacompounet.component.css'],
})
export class PruebacompounetComponent {
  tituloPrueba: string = 'Letra Random';

  arrAbecedario: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  valorNum: number = Math.floor(Math.random() * this.arrAbecedario.length);
  letra: string = this.arrAbecedario[this.valorNum];
  mostrar(ale: number) {
    ale = Math.floor(Math.random() * this.arrAbecedario.length);
    this.letra = this.arrAbecedario[ale];
  }
}
