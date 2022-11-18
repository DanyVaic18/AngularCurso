import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzMainPageComponent } from './dbz-main-page/dbz-main-page.component';
import { ListaPersonajesDbzComponent } from './lista-personajes-dbz/lista-personajes-dbz.component';

@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListaPersonajesDbzComponent,
  ],
  exports:[
    DbzMainPageComponent,
  ],
  imports: [CommonModule,FormsModule],
})
export class AppDragonBallZModule {}
