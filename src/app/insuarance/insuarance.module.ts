import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsuarancePageRoutingModule } from './insuarance-routing.module';

import { InsuarancePage } from './insuarance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsuarancePageRoutingModule
  ],
  declarations: [InsuarancePage]
})
export class InsuarancePageModule {}
