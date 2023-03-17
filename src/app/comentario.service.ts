import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComentarioInterface } from './interfaces/ComentarioInterface';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  baseUrl: string = 'https://localhost:7252/SetComentario';
  constructor(private http: HttpClient) { }

  setComentario(comentario: ComentarioInterface){

    return this.http.post(this.baseUrl, comentario)
  }
  
  getComentario(mensaje: string){
    // let auth_token = localStorage.getItem('token_value');
    // const header = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `bearer ${auth_token}`
    // })
    //console.log(this.http.get(this.baseUrlGet+"/titulo="+id+"&transaccion=BUSCAR_NOMBRE", {headers: header}))
    return this.http.get('https://localhost:7252/GetComentario?mensaje='+mensaje+ '&transaccion=AGREGAR_COMENTARIO',);
  }   
  // insertPelicula(pelicula:ComentarioInterface):Observable<any>{
  //   return this.httpclient.post(this.baseUrl+'InsertPelicula',pelicula)
  // }

  DelecteComentario(mensaje: string):Observable<void>{
    return this.http.delete<void>('https://localhost:7252/DelComentario?mensaje='+mensaje+'&Transaccion=ELIMINAR_COMENTARIO',);
    //https://localhost:7252/DelComentario?mensaje=sx&Transaccion=ELIMINAR_COMENTARIO
    //https://localhost:7252/GetComentario?mensaje=excelente%20pagina%20puedo%20comprar%20seguro&Transaccion=ELIMINAR_COMENTARIO
  }

}
