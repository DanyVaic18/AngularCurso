import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador 4-41-42/contador.component';

import { PruebacompounetComponent } from './primerprueba/pruebacompounet/pruebacompounet.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebacompounetComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
