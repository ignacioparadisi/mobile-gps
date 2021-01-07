import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoutesPage } from './routes.page';

import { RoutesPageRoutingModule } from './routes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RoutesPageRoutingModule
  ],
  declarations: [RoutesPage]
})
export class RoutesPageModule {}
