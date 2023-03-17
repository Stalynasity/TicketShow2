// import { TestBed } from '@angular/core/testing';
// import { AuthService } from './auth.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioInterface } from './interfaces/UsuarioInterface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseUrl: string = 'https://localhost:7252/api/Usuario/Get'
  constructor(private http: HttpClient) { }

  login(user: UsuarioInterface){
    console.log(localStorage.getItem('token_value'))
    return this.http.post(this.baseUrl, user);
  }

  get getEmail(){
    return localStorage.getItem('email');
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token_value') == null){
      return false
    }else {
      return true
    }
  }
}

// describe('AuthService', () => {
//   let service: AuthService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(AuthService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
