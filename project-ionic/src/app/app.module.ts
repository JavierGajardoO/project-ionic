import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EstructuraComponent } from 'src/pages/estructura/estructura.component';
import { MenuComponent } from 'src/pages/menu/menu.component';
import { MainComponent } from 'src/pages/main/main.component';
import { InicioComponent } from 'src/pages/inicio/inicio.component';
import { RegistroComponent } from 'src/pages/registro/registro.component';
import { RecibidosComponent } from 'src/pages/recibidos/recibidos.component';
import { EnviarmsjComponent } from 'src/pages/enviarmsj/enviarmsj.component';
import { ListadoComponent } from 'src/pages/listado/listado.component';


@NgModule({
  declarations: [
    AppComponent,
    EstructuraComponent,
    MenuComponent,
    MainComponent,
    InicioComponent,
    RegistroComponent,
    RecibidosComponent,
    EnviarmsjComponent,
    ListadoComponent

  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
