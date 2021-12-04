import { Component, OnInit } from '@angular/core';
import { IUser } from '../interface/IUser';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  //agregado
  public lista: Array<IUser> = [];
 ////////////// 
  public usuario: IUser = {
    nombre: '',
    apellido: '',
    nombreUsuario: '',
    password: '',
    fechaNac: ''
  };
//  private servicio: ServicioService;

//agregado
constructor(private servicio: ServicioService) {

}
/////////////


//constructor(userService: ServicioService) {
//   this.servicio = userService;
//   }

//agregado
public listarUsers(){
  this.servicio.listarUsuarios()
  .subscribe( (respuesta: Array<IUser>) => {
    this.lista  = respuesta;
  })
}
///////////////


//agregado   
public agregarUser(){
  this.servicio.agregarUsuario(this.usuario)
  .subscribe( (respuesta: IUser) => {
    this.lista.push(respuesta);
    this.usuario = {
      nombre: '',
      apellido: '',
      nombreUsuario: '',
      password: '',
      fechaNac: ''
    }
    alert("Usuario registrado correctamente.");
  })

}
///////////////



public eliminarUsuario(id: number){
  const select_user: IUser = this.lista.find( u => u.id === id);
  this.usuario = select_user;
  console.log(id);
  const respuesta = window.confirm("¿Seguro quieres borrar a este usuario ?")
  if(respuesta){
    this.servicio.borrarUsuario(id)
    .subscribe( respuesta => {
      this.listarUsers();
      alert("Usuario borrado");
    })

  }
}
//////////////




public modificarUser(){
  this.servicio.modificarUsuario(this.usuario, this.usuario.id)
  .subscribe( (respuesta: IUser) => {
    this.lista.push(respuesta);
    this.usuario = {
      nombre: '',
      apellido: '',
      nombreUsuario: '',
      password: '',
      fechaNac: ''
    }
    alert("Usuario modificado correctamente.");
  })
}

///////////////









  ngOnInit() {
  }

}
