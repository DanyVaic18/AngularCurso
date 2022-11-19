import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ContadorModule } from './app-count/contador.module';
import { AppDragonBallZModule } from './app-dragon-ball-z/app-dragon-ball-z.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroeModule } from './heroes/heroe.module';
import { PruebacompounetComponent } from './primerprueba/pruebacompounet/pruebacompounet.component';



@NgModule({
  declarations: [
    AppComponent,
    PruebacompounetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroeModule,
    ContadorModule,
    AppDragonBallZModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
