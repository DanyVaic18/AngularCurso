import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebacompounet',
  templateUrl: './pruebacompounet.component.html',
  styleUrls: ['./pruebacompounet.component.css'],
})
export class PruebacompounetComponent {
  textContador: string = 'Contador, aplicación';
  valorNum: number = Math.floor(Math.random() * 10);
  arrLetras: string[] = ['a', 'c', 'v', 'k', 'q', 'r', 's', 't', 'y', 'u'];
  letra: string = "";
   mostrar(ale:number) {
    ale =  Math.floor(Math.random() * 10)
    this.letra=  this.arrLetras[ale];
    console.log(this.letra)
  }
}
