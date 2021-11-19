import { Component, OnInit } from '@angular/core';
import { IUser } from '../interface/IUser';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public usuario: IUser = {
    nombre: '',
    apellido: '',
    nombreUsuario: '',
    password: '',
    fechaNac: ''
  };
  private servicio: ServicioService;

  constructor(userService: ServicioService) {
    this.servicio = userService;
   }

  public agregarUser(){
    this.servicio.agregarUsuario(this.usuario)
    .subscribe( respuesta => {
      console.log(respuesta);
    });
    console.log(this.usuario);
  }
  ngOnInit() {
  }

}
