import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service.spec';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  email: string;

  constructor(public authService: AuthService, private router: Router){
    const emailFromStorage = localStorage.getItem('email');
    this.email = emailFromStorage !== null ? emailFromStorage : '';
  }

  reHome() {
    this.router.navigate(['/home']);
  }

  reEvento() {
    this.router.navigate(['/evento']);
  }

  reComunicado() {
    this.router.navigate(['/comunicado']);
  }

  reCotizacion() {
    this.router.navigate(['/cotizaciones']);
  }

  reServicio() {
    this.router.navigate(['/servicios']);
  }

  reCerrarSesion() {
    localStorage.removeItem('token_value');
  }
}
