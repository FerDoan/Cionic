import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FapPageRoutingModule } from './fap-routing.module';

import { FapPage } from './fap.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FapPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FapPage]
})
export class FapPageModule {}
