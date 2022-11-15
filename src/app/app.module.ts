import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorModule } from './app-count/contador.module';

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
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
