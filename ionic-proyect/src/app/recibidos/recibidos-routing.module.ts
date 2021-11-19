import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecibidosPage } from './recibidos.page';

const routes: Routes = [
  {
    path: '',
    component: RecibidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecibidosPageRoutingModule {}
