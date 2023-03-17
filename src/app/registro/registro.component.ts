import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroService } from 'src/registro.service';
import { ClienteInterface } from '../pag-comunicados/InterfazComunicacion';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { validateVerticalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent{
  ciudad: any = ['Guayaquil', 'Quito', 'Samborondon'];

    dataSource: any = [];

    constructor(private service: RegistroService, private readonly fb: FormBuilder,private router:Router, private emer:MatSnackBar) { 

      this.fb.group({
        cedula: ['', [Validators.required, Validators.minLength(10)]],
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        direccion: ['', [Validators.required]],
        ciudad: ['', [Validators.required]],
        telefono: ['', [Validators.required, Validators.minLength(10)]],
        fecha_nacimiento: ['', [Validators.required]],
        email: ['', [Validators.required,Validators.email]],
        poss: ['', [Validators.required, Validators.minLength(6)]],
      })
    }

  
  
    onSetValue(): void {
      // this.contactForm.setValue({ comment: 'Hola mundo' });
    }
  
    clienteTmp: any;
    usuarioTmp: any;

    contactForm = new FormGroup({
      cedula: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl(),
      direccion: new FormControl(),
      telefono: new FormControl(),
      fecha_nacimiento: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    })

    cedula:any;
    nombre:any;
    apellido:any;
    direccion:any;
    telefono:any;
    fecha_nacimiento:any;
    email:any;
    password:any;


    onSubmit()
   {
    this.cedula = this.contactForm.value.cedula;
    console.log(this.cedula)
    this.nombre = this.contactForm.value.nombre;
    console.log(this.nombre)
    this.apellido = this.contactForm.value.apellido;
    console.log(this.apellido)
    this.direccion = this.contactForm.value.direccion;
    console.log(this.direccion)
    this.telefono = this.contactForm.value.telefono;
    console.log(this.telefono)
    this.fecha_nacimiento = this.contactForm.value.fecha_nacimiento;
    console.log(this.fecha_nacimiento)
    this.email = this.contactForm.value.email;
    console.log(this.email)
    this.password = this.contactForm.value.password;
    console.log(this.password)

    this.service.getCliente(this.cedula, this.nombre, this.apellido, this.direccion, this.telefono, this.fecha_nacimiento)
    .subscribe((NewClie: any) => {
      console.log(NewClie);
    })
    this.service.getUsuario(this.email, this.password)
    .subscribe((NewUsu: any) => {
      console.log(NewUsu);
      this.router.navigate(['/login']);
      this.emer.open('El usuario fue registrado','',{
        duration:2100,
        horizontalPosition:'center',
        verticalPosition:'bottom'
      })

    })



    // this.clienteTmp = this.contactForm.value.cedula;
    // this.clienteTmp = this.contactForm.value.nombre;
    // this.clienteTmp = this.contactForm.value.apellido;
    // this.clienteTmp = this.contactForm.value.direccion;
    // this.clienteTmp = this.contactForm.value.telefono;
    // this.clienteTmp = this.contactForm.value.fecha_nacimiento;
    // console.log(this.clienteTmp)

    // if(this.clienteTmp.length !== 0){
    //   this.service.getCliente(this.clienteTmp).subscribe((data:any) =>{
    //   this.dataSource = new MatTableDataSource<ClienteInterface>(data as ClienteInterface[]);
    //   console.log(data);
    // })
    // }
    
    // this.usuarioTmp = this.contactForm.value.email;
    // this.usuarioTmp = this.contactForm.value.password;
    // console.log(this.usuarioTmp)

    // if(this.usuarioTmp.length !== 0){
    //   this.service.getUsuario(this.usuarioTmp).subscribe((data:any) =>{
    //   this.dataSource = new MatTableDataSource<UsuarioInterface>(data as UsuarioInterface[]);
    //   console.log(data);
    // })
    // }

  }

  }