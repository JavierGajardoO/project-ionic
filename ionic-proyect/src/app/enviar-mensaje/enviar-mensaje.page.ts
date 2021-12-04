import { Component, OnInit } from '@angular/core';
import { IMsj } from '../interface/IMsj';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: './enviar-mensaje.page.html',
  styleUrls: ['./enviar-mensaje.page.scss'],
})
export class EnviarMensajePage implements OnInit {

    public mensajes: IMsj = {
      mensaje: {
        para: '',
        asunto: '',
        descripcion: ''
      }
    };
    private servicio: ServicioService;
  constructor(msjservice: ServicioService) {
    this.servicio = msjservice;
  }
  public agregarMensaje(){
    this.servicio.agregarMensajee(this.mensajes)
    .subscribe( respuesta => {
      console.log(respuesta);
    } );
    console.log(this.mensajes);
  }

  ngOnInit() {
  }

}
