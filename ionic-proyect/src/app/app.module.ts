import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ServicioService } from './servicio/servicio.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioPageModule } from './inicio/inicio.module';
import { ListadoPageModule } from './listado/listado.module';
import { LoginPageModule } from './login/login.module';
import { MenuPageModule } from './menu/menu.module';
import { RecibidosPageModule } from './recibidos/recibidos.module';
import { RegistroPageModule } from './registro/registro.module';
//import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            InicioPageModule,
            ListadoPageModule,
            LoginPageModule,
            MenuPageModule,
            RecibidosPageModule,
            RegistroPageModule,
            HttpClientModule,
            FormsModule,
//            GoogleMapsModule
          ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
