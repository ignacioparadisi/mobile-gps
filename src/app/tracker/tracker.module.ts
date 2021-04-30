import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrackerPage } from './tracker.page';
import { IonBottomSheetModule } from 'ion-bottom-sheet';

import { TrackerPageRoutingModule } from './tracker-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TrackerPageRoutingModule,
    IonBottomSheetModule
  ],
  declarations: [TrackerPage]
})
export class TrackerPageModule {}
