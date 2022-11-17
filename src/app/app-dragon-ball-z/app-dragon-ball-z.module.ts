import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainPageComponent } from './dbz-main-page/dbz-main-page.component';

@NgModule({
  declarations: [
    DbzMainPageComponent
  ],
  exports:[
    DbzMainPageComponent
  ],
  imports: [CommonModule],
})
export class AppDragonBallZModule {}
