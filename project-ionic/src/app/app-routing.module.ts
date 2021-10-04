import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EnviarmsjComponent } from 'src/pages/enviarmsj/enviarmsj.component';
import { EstructuraComponent } from 'src/pages/estructura/estructura.component';
import { InicioComponent } from 'src/pages/inicio/inicio.component';
import { ListadoComponent } from 'src/pages/listado/listado.component';

import { MainComponent } from 'src/pages/main/main.component';
import { MenuComponent } from 'src/pages/menu/menu.component';
import { RecibidosComponent } from 'src/pages/recibidos/recibidos.component';
import { RegistroComponent } from 'src/pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'estructura',
    component: EstructuraComponent
  },
  {
    path: 'enviar',
    component: EnviarmsjComponent
  },
  {
    path: 'recibidos',
    component: RecibidosComponent
  },
  {
    path: 'listado',
    component: ListadoComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
