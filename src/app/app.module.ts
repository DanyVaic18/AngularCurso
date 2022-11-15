import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador 4-41-42/contador.component';
import { HeroeCoponent } from './heroes/heroe/heroe.component';
import { PruebacompounetComponent } from './primerprueba/pruebacompounet/pruebacompounet.component';
import { ListadoHeroesComponent } from './heroes/listado-heroes/listado-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebacompounetComponent,
    ContadorComponent,
    HeroeCoponent,
    ListadoHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
