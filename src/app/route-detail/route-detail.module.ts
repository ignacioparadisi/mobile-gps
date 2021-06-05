import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouteDetailPageRoutingModule } from './route-detail-routing.module';

import { RouteDetailPage } from './route-detail.page';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouteDetailPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [RouteDetailPage]
})
export class RouteDetailPageModule {}
