import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
  {
    path:"modificar/:id",
    component: ModificarComponent
  },

  {
    path:"eliminar/:id",
    component: EliminarComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosRoutingModule { }
