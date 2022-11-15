import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  // styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent{
  verdadero: string|number = 10
  heroes : string[] = [
    'SPIDER-MAN',
    'IRON-MAN',
    'HULK',
    'THOR',
    'SUPER-MAN',
    'MR-INCREIBLE'
  ]
  heroeBorrado:string = 'No se ah borrado ningun heroe'
  heroeAgregado:string = ''
  listHeroes: string[] = [
    'SPIDER-MAN',
    'IRON-MAN',
    'HULK',
    'THOR',
    'SUPER-MAN',
    'MR-INCREIBLE',
    'FLASH',
    'LINTERNA-VERDE',
    'CAPITAN-AMERICA',
    'DOCTOR-STRANGE',
    'NICK-FIURE',
  ]
  btnAggDisabled: boolean = false
  agregarHeroe (){
    if(this.listHeroes.length === this.heroes.length){ //
      this.btnAggDisabled = true
    }else{
      this.heroes.push(this.listHeroes[this.heroes.length])
      this.heroeAgregado = this.heroes[this.heroes.length-1]
    }
    /*
     let numAletorio:number = Math.floor(Math.random()*listHeroes.length)
     if(!this.heroes.includes(listHeroes[numAletorio]))this.heroes.push( listHeroes[numAletorio])
    */
  }
  borrarHeroe(){
    //let heroeBorrado = this.heroes.pop() // Almacena el herue eliminado del array
    this.heroeBorrado = this.heroes.pop() || 'No se ah borrado ningun heroe'
    if(this.listHeroes.length !== this.heroes.length)this.btnAggDisabled = false
  }
  vaciarListaHeroes (){
    this.heroes = []
  }
}
