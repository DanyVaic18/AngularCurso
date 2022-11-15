import { Component } from '@angular/core';

@Component({
  selector:'contador',
  templateUrl:'./contador.component.html',
  styleUrls:['./contador.css']
})

export class ContadorComponent {
  textCount: string = "Contador"
  base: number = 5;
  bas: number = 5;
  valorNum: number = 0;
  multiplos = (cinco: number) => {
    this.base += cinco;
  };
  sumarYrestar = (valor: number) => {
    this.valorNum += valor;
  };
}


  //  sumar(){
  //   this.valorNum +=  Math.floor(Math.random() * 10)
  //  };
  //  restar(){
  //   this.valorNum -= Math.floor(Math.random() * 10)
  //  };
