import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HeroeCoponent } from "./heroe/heroe.component";
import { ListadoHeroesComponent } from "./listado-heroes/listado-heroes.component";


@NgModule({
  declarations:[
    HeroeCoponent,
    ListadoHeroesComponent,
  ],
  exports:[
    ListadoHeroesComponent
  ],
  imports:[
    BrowserModule
  ],
})

export class HeroeModule {}
