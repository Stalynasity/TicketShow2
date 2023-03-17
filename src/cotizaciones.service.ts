import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicioInterface } from './app/interfaces/ServicioInterface';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {

  baseUrl: string = 'https://localhost:7252/GetCotizaciones';
  constructor(private http: HttpClient) { }

  getCotizaciones(evento: ServicioInterface) {

    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })

    return this.http.get('https://localhost:7252/GetCotizaciones?t=&transaccion=CCONSULTAR_TODOS_SERVICIOS', { headers: header });
  }
}
