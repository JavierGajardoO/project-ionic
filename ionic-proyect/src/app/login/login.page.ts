import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IUser } from '../interface/IUser';
import { ServicioService } from '../servicio/servicio.service';
//import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public nombreUsuario="";
  public password="";

  constructor(private auth: ServicioService, private router: Router){}


  public loginusr(){
    this.auth.iniciarSesion(this.nombreUsuario, this.password)
    .then( resultado =>{
      if(resultado){
//       alert(this.auth.usuarioLogeado.nombre);
        alert(`El usuario: ${this.auth.usuarioLogeado.nombre} se ha logeado con exito`);
        this.router.navigate(["menu"]);
      }
      else{
        alert("Usuario y contraseña no exiten.");
      }
    })
//    console.log({
//     nombreUsuario: this.nombreUsuario,
//      contrasena: this.contrasena
//    });
  }


//  logg(){
//    this.router.navigate(["menu"]);
//  }
  




  ngOnInit() {
  }

}
