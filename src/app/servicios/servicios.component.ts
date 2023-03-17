import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../servicio.service';

import { HttpClient } from '@angular/common/http';

interface Nombres {
  value: string;

}

interface Eventos {
  value: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  nombre: string[] = ['Concierto', 'Teatro', 'Feria', 'Seminario', 'Evento privado', 'Evento deportivo', 'Otro'];

  tipo_evento: string[] = ['Comercialización de boletos', 'Ferias: Venta y control de acceso',
    'Seminarios , congresos y talleres', 'Pulseras personalizadas',
    'Impresión de boletos sin comercialización', 'Inscripciones online (gratuitos o pagados)', 'Otro'];

  constructor(private http: HttpClient, private fb: FormBuilder, private service: ServicioService, private router: Router) { }

  servicioss = new FormGroup({

    nombre: new FormControl('', Validators.required),
    tipo_evento: new FormControl('', Validators.required),
    nombre_organizador: new FormControl('', Validators.required),
    email: new FormControl('',
      [Validators.required,
      Validators.pattern(
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      )]),
    pos_lugar: new FormControl('', Validators.required),
    id_ciudad: new FormControl('', Validators.required)

  })

  nombreTemp: any;
  tipo_eventoTemp: any;
  nombre_organizadorTemp: any;
  emailTemp: any;
  pos_lugarTemp: any;
  id_ciudadTemp: any;

  ngOnInit(): void {

  }



  onSubmit() {
    this.nombreTemp = this.servicioss.value.nombre;
    console.log(this.nombreTemp)
    this.tipo_eventoTemp = this.servicioss.value.tipo_evento;
    console.log(this.tipo_eventoTemp)
    this.nombre_organizadorTemp = this.servicioss.value.nombre_organizador;
    console.log(this.nombre_organizadorTemp)
    this.emailTemp = this.servicioss.value.email;
    console.log(this.emailTemp)
    this.pos_lugarTemp = this.servicioss.value.pos_lugar;
    console.log(this.pos_lugarTemp)
    this.id_ciudadTemp = this.servicioss.value.id_ciudad;
    console.log(this.id_ciudadTemp)


    this.service.getServicio(this.nombreTemp, this.tipo_eventoTemp, this.nombre_organizadorTemp, this.emailTemp, this.pos_lugarTemp, this.id_ciudadTemp).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['cotizaciones']);
    })

  };

}



