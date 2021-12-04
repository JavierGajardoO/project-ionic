import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interface/IUser';
import { Observable } from 'rxjs';
import { IMsj } from '../interface/IMsj';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  public usuarioLogeado: IUser;
  private url = 'http://localhost:3000/usuario';
  private cliente: HttpClient;
  //agregado para login
//  usuario: any;
  constructor(moduloHttp: HttpClient ) {
    this.cliente = moduloHttp;
   }



   public listarUsuarios(): Observable<Array<IUser>>  {
    return this.cliente.get<Array<IUser>>(this.url);
   }
   public agregarUsuario(nuevoUser: IUser): Observable<IUser> {
    return this.cliente.post<IUser>(this.url, JSON.stringify(nuevoUser), {
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type':'application/json'
      }
    });
   }

   public modificarUsuario(nuevoUser: IUser, id:number): Observable<IUser> {
    return this.cliente.patch<IUser>(this.url+"/"+ id, JSON.stringify(nuevoUser), {
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type':'application/json'
      }
    });
   }
//patch, put


  public borrarUsuario(id: number) {
    return this.cliente.delete(`${this.url}/${id}`)
  }

  
  public async iniciarSesion(nombreUsuario: String, password: String): Promise<boolean>{
    let retorno = false;
    const resultado = await this.cliente
    .get<Array<IUser>>(`http://localhost:3000/usuario?nombreUsuario=${nombreUsuario}&password=${password}`)
    .toPromise();
    if(resultado.length === 0){
      retorno =false;
    }
    else{
      this.usuarioLogeado = resultado[0];
      retorno = true;
    }
    return retorno;

  }

  public agregarMensajee(nuevoMsj: IMsj): Observable<IMsj>{
    return this.cliente.post<IMsj>(this.url, JSON.stringify(nuevoMsj),{
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type':'application/json'
      }
    });
   }


   
//   public iniciarSesion(usuario: string, contrasena: string): IUser | undefined{
//   let usuarioEncontrado: IUser | undefined = undefined;
//    for(let temp of this.usuario){
//        if (temp.usuario === usuario && temp.contrasena === contrasena){
//            usuarioEncontrado = temp;
//           break;
//        }
//    }
//    return usuarioEncontrado;
//}
   

}
