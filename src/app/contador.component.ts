import { Component } from '@angular/core';

@Component({
  selector:'contador',
  templateUrl:'./contador.component.html',
})

export class ContadorComponent {
  base: number = 5;
  bas: number = 5;
  multiplos = (cinco: number) => {
    this.base += cinco;
  };
}
