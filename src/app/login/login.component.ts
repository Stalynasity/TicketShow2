import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service.spec';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private service: AuthService, private router: Router) { }
  // constructor(private router: Router) { }

  alert: boolean = false;
  emailTemp: any;
  passwordTemp: any;

  usuarioLogin = new FormGroup({
    email: new FormControl('',
      [Validators.required,
      Validators.pattern(
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      )]),
    password: new FormControl('', Validators.required),
    Transaccion: new FormControl()
  })


  onSubmit() {
    this.usuarioLogin.value.Transaccion="VALIDAR_ACCESO";
    this.emailTemp = this.usuarioLogin.value.email;

    this.service.login(this.usuarioLogin.value as UsuarioInterface).subscribe((data:any) => {
      console.log(data);
      localStorage.setItem('email', this.emailTemp);
      localStorage.setItem('token_value', data);
      this.router.navigate(['/evento']);
      },
      (errorData) => alert('Usuario o password incorrecta'))
    }
    // this.router.navigate(['/home']);
    registro() {
      this.router.navigate(['registro']);
    }

  }

