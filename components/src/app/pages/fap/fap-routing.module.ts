import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FapPage } from './fap.page';

const routes: Routes = [
  {
    path: '',
    component: FapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FapPageRoutingModule {}
