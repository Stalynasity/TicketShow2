import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagComunicadosComponent } from './pag-comunicados/pag-comunicados.component';
import { PagEventosComponent } from './pag-eventos/pag-eventos.component';
import { LoginComponent } from './login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CompraEventosComponent } from './compra-eventos/compra-eventos.component';
import { PagCotizacionesComponent } from './pag-cotizaciones/pag-cotizaciones.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'comunicado', component: PagComunicadosComponent },
  { path: 'evento', component: PagEventosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'compra', component: CompraEventosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'cotizaciones', component: PagCotizacionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
