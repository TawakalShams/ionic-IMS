import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuarancePage } from './insuarance.page';

const routes: Routes = [
  {
    path: '',
    component: InsuarancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuarancePageRoutingModule {}
