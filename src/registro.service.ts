import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  baseUrl: string = 'https://localhost:7252';

  constructor(private http: HttpClient) { }
   

   getCliente(cedula: string, nombre: string, apellido: string, direccion: string, 
             telefono: string, fecha_nacimiento: Data) {

            //localStorage.setItem('cliente',JSON.stringify(id:Number));
              
     return this.http.get('https://localhost:7252/GetCliente?cedula='+cedula+'&nombre='+nombre+'&apellido='+apellido+
     '&direccion='+direccion+'&telefono='+telefono+'&fecha_nacimiento='+fecha_nacimiento+'&Transaccion=REGISTRAR_CLIENTE');
     
   }

   getUsuario(email: string, password: string) {
     return this.http.get('https://localhost:7252/GetUsuario?email='+email+'&password='+password+'&Transaccion=REGISTRAR_USUARIO');
   } 

}
