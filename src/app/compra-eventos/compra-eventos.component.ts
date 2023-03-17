import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder,FormControl, Validators, FormGroup} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';

import {Observable} from 'rxjs';
import {isEmpty, map} from 'rxjs/operators';
import { MatSliderChange } from '@angular/material/slider';

interface Mes {
  value: string;
  viewValue: string;
}

interface Año {
  value: string;
}

@Component({
  selector: 'app-compra-eventos',
  templateUrl: './compra-eventos.component.html',
  styleUrls: ['./compra-eventos.component.css']
})
export class CompraEventosComponent implements OnInit {

  resultado!: number;

  disabled = false;
  max = 100;
  min = 1;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  precio = 0;
  precioTotal = 0;


  formatLabel(value: number): string {
    
    if (value <= 1) {
      return value + 'Ticket';
    }

    else return value + 'Tickets'

    return `${value}`;
  }

    

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.precioTotal = parseFloat(this.datoGuardado[0].precio) * parseInt(value);
  }


  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  
  dataEntrante: any;
  datoGuardado: Array<any> = [];

  
  stepperOrientation: Observable<StepperOrientation>;


  meses: Mes[] = [
    {value: 'Enero-0', viewValue: '01'},
    {value: 'Febrero-1', viewValue: '02'},
    {value: 'Marzo-2', viewValue: '03'},
    {value: 'Abril-3', viewValue: '04'},
    {value: 'Mayo-4', viewValue: '05'},
    {value: 'Junio-5', viewValue: '06'},
    {value: 'Julio-6', viewValue: '07'},
    {value: 'Agosto-7', viewValue: '08'},
    {value: 'Septiembre-8', viewValue: '09'},
    {value: 'Octubre-9', viewValue: '10'},
    {value: 'Noviembre-10', viewValue: '11'},
    {value: 'Diciembre-11', viewValue: '12'},
  ];

  anios: Año[] = [
    {value: '2023'},
    {value: '2024'},
    {value: '2025'},
    {value: '2026'},
    {value: '2027'},
    {value: '2028'},
    {value: '2029'},
    {value: '2030'},
    
  ];

  
  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

     

      this.firstFormGroup = this._formBuilder.group({
        nombre: new FormControl( '', Validators.required),
        apellidos: new FormControl('', Validators.required),
        cedula: new FormControl('', [Validators.required, Validators.minLength(10)]),
        correo: new FormControl('', [Validators.required,
          Validators.pattern(
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
          )]),
        direccion: new FormControl('', Validators.required),
        nacimiento: new FormControl('', [Validators.required, this.fechaNacimientoValidator])
      });

      this.secondFormGroup = this._formBuilder.group({
        nombres: new FormControl( '', Validators.required),
        cedula: new FormControl('', [Validators.required, Validators.minLength(10)]),
        correo: new FormControl('', [Validators.required,
          Validators.pattern(
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
          )]),
        pais: new FormControl('', Validators.required)
      });

      this.thirdFormGroup = this._formBuilder.group({
        tarjeta: new FormControl('', [Validators.required, Validators.minLength(15)]),
      });

  }

  fechaNacimientoValidator(control: FormControl): {[key: string]: boolean} | null {
    const fechaNacimiento = new Date(control.value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  
    if (edad < 18) {
      return { menorDeEdad: true };
    }
  
    return null;
  }


  ngOnInit() {
    this.dataEntrante = localStorage.getItem('datoEvento');
    this.datoGuardado.push(JSON.parse(this.dataEntrante))
    console.log(this.datoGuardado);
    if (this.datoGuardado && this.datoGuardado.length > 0) {
      this.max = this.datoGuardado[0].cupos;
      
    }
    
  
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }


}
