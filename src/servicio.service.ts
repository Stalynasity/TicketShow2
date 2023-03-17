import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicioInterface } from './app/interfaces/ServicioInterface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  baseUrl: string = 'https://localhost:7252/GetServicios';

  constructor(private http: HttpClient) { }

  getServicio(nombre: string, tipo_evento: string, nombre_organizador: string, email: string, pos_lugar: string, id_ciudad: number) {


    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })

    return this.http.get('https://localhost:7252/GetServicios?nombre=' + nombre + '&tipo_evento=' + tipo_evento + '&nombre_organizador=' + nombre_organizador + '&email=' + email + '&pos_lugar=' + pos_lugar + '&id=' + id_ciudad + '&transaccion=INSERTAR', { headers: header })
  }
}
