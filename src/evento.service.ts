import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventoInterface } from './app/interfaces/EventoInterface';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  baseUrl: string = 'https://localhost:7252/PostEventos';
  baseUrlGet: string = 'https://localhost:7252/GetEventos?';
  constructor(private http: HttpClient) { }

  getEvento(evento: EventoInterface){

    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })

    return this.http.post(this.baseUrl, evento, {headers: header})
  }

  getTitulo(titulo: string){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${auth_token}`
    })
    //console.log(this.http.get(this.baseUrlGet+"/titulo="+id+"&transaccion=BUSCAR_NOMBRE", {headers: header}))
    return this.http.get('https://localhost:7252/GetEventos?titulo='+titulo+ '&transaccion=BUSCAR_NOMBRE', {headers: header});
  }
}
