import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ContadorComponent } from "./contador 4-41-42/contador.component";
@NgModule({
  declarations:[
    ContadorComponent
  ],
  exports:[ContadorComponent],
  imports:[
    BrowserModule
  ]
})
export class ContadorModule {}
