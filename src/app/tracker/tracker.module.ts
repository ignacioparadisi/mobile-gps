import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrackerPage } from './tracker.page';

import { TrackerPageRoutingModule } from './tracker-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TrackerPageRoutingModule
  ],
  declarations: [TrackerPage]
})
export class TrackerPageModule {}
