import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interface/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private url = 'http://localhost:3000/usuario';

  private cliente: HttpClient;
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
   public eliminarUsuario(id:number): Observable<IUser>{
    return this.cliente.delete<IUser>(this.url+"/"+ id)
  }

  public modificarUsuario(nuevoUser: IUser, id:number): Observable<IUser> {
   return this.cliente.put<IUser>(this.url+"/"+ id, JSON.stringify(nuevoUser), {
     headers: {
       // eslint-disable-next-line @typescript-eslint/naming-convention
       'Content-Type':'application/json'
     }
   });
  }
    public iniciarSesion(usuario: string, contrasena: string): IUser | undefined{
      let usuarioEncontrado: IUser | undefined = undefined;
      for(let temp of this.cliente){
          if (temp.usuario === usuario && temp.contrasena === contrasena){
              usuarioEncontrado = temp;
              break
          }
      }
      return usuarioEncontrado;
  }
}
