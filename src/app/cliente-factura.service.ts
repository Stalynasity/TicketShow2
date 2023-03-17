import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteFacturaService {

  baseUrl: string = 'https://localhost:7252';

  constructor() { }
}
