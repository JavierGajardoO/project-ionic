import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibidosPageRoutingModule } from './recibidos-routing.module';

import { RecibidosPage } from './recibidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibidosPageRoutingModule
  ],
  declarations: [RecibidosPage]
})
export class RecibidosPageModule {}
