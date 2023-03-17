import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EventoInterface } from '../interfaces/EventoInterface';
import { AuthService } from '../auth.service.spec';
import { FormControl, FormGroup } from '@angular/forms';
import { EventoService } from '../../evento.service';
import { LugarInterface } from '../interfaces/LugarInterface';



@Component({
  selector: 'app-pag-eventos',
  templateUrl: './pag-eventos.component.html',
  styleUrls: ['./pag-eventos.component.css']
})
export class PagEventosComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['titulo', 'descripcion', 'participantes', 'cupos', 'fecha']

  data = [{
    titulo: 'Picnic Retro',
    descripcion: 'EVENTO REPROGRAMADO LOUNGE BOX Sólo se vende mesa completa ',
    participantes: 'JC Producciones',
    cupos: 12,
    fecha: "2022-03-25",
    localidad: "Picnic BOX",
    precio: "$90",
    lugar: "Guayaquil Country Club",
    hora: "21:00:00",
    img: "https://i.imgur.com/SQN8A0H.jpg",
  },
  {
    titulo: 'Fonseca - Quito',
    descripcion: 'EVENTO REPROGRAMADO ',
    participantes: 'Fonseca',
    cupos: 121,
    fecha: "2022-03-25",
    localidad: "Localidad VIP",
    precio: "$212",
    lugar: "Coliseo General Rumiñahui - QUITO",
    hora: "21:00:00",
    img: "https://i.imgur.com/ptldFcz.jpg",
  },
  {
    titulo: 'Santiago Cruz - Sinfonico',
    descripcion: 'Sin novedad',
    participantes: 'Santiago Cruz',
    cupos: 99,
    fecha: "2022-03-25",
    localidad: "Butacas VIP",
    precio: "$90",
    lugar: "Teatro Nacional Del CCE",
    hora: "21:00:00",
    img: "https://i.imgur.com/ftiYfMu.png",
  }
  ];


  clickedRows = new Set<EventoInterface>();
  // clickedRowsLugar: new () => LugarInterface;

  constructor(private service: EventoService, private router: Router) { }

  ngOnInit(): void {
    this.EventoConsultar.value.Transaccion = "CONSULTAR_TODOS_EVENTOS";

    this.service.getEvento(this.EventoConsultar.value as EventoInterface).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<EventoInterface>(data as EventoInterface[]);
      console.log(data);
    },
      (errorData) => (alert("Usuario no autorizado"),
        this.router.navigate(['/'])))
  }

  EventoConsultar = new FormGroup({
    Transaccion: new FormControl()
  })

  /*mostrarTodos() {
    this.EventoConsultar.value.Transaccion = "CONSULTAR_TODOS_EVENTOS";

    this.service.getEvento(this.EventoConsultar.value as EventoInterface).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<EventoInterface>(data as EventoInterface[]);
      console.log(data);
    },
      (errorData) => (alert("Usuario no autorizado"),
        this.router.navigate(['/'])))

  }*/

  usuarioNuevo = new FormGroup({
    cedula: new FormControl(),
  })

  tituloTemp: any;

  filtrar() {
    this.tituloTemp = this.usuarioNuevo.value.cedula;
    console.log(this.tituloTemp)
    if(this.tituloTemp.length !== 0){
          this.service.getTitulo(this.tituloTemp).subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<EventoInterface>(data as EventoInterface[]);
      console.log(data);
      console.log('hola')
    },
    (errorData) => (alert("Usuario no autorizado"),
      this.router.navigate(['/'])))
    } else {
      this.EventoConsultar.value.Transaccion = "CONSULTAR_TODOS_EVENTOS";

    this.service.getEvento(this.EventoConsultar.value as EventoInterface).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<EventoInterface>(data as EventoInterface[]);
      console.log(data);
    },
      (errorData) => (alert("Usuario no autorizado"),
        this.router.navigate(['/'])))
    }

    // const filtro = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filtro.trim().toLowerCase();
  }
  
  openForView(eventoInterface: EventoInterface) {
    this.clickedRows.clear();
    this.clickedRows.add(eventoInterface);
    //this.clickedRowsLugar.add(eventoInterface.lugar);
    localStorage.setItem('datoEvento', JSON.stringify(eventoInterface));
    console.log(eventoInterface);
    //console.log(this.clickedRowsLugar);
    console.log(this.clickedRows);
  }
  
  reEvento() {
    this.clickedRows.clear();
  }
  
  comprar(){
    this.router.navigate(['compra']);
  }

}





















/*ngOnInit(): void {
  let token = localStorage.getItem('token_value');
  console.log(token);
  if(token == null) {
    alert("Usuario no esta logueado. Por favor inicie sesion");
    this.router.navigate(['/home']);
  }

  this.dataSource = new MatTableDataSource<EventoInterface>(this.data as EventoInterface[])
  console.log(this.data);
}*/




/*data = [{
  titulo: 'Picnic Retro',
  descripcion: 'EVENTO REPROGRAMADO LOUNGE BOX Sólo se vende mesa completa ',
  participantes: 'JC Producciones',
  cupos: 12,
  fecha: "2022-03-25",
  localidad: "Picnic BOX",
  precio: "$90",
  lugar: "Guayaquil Country Club",
  hora: "21:00:00",
  img: "https://i.imgur.com/SQN8A0H.jpg",
},
{
  titulo: 'Fonseca - Quito',
  descripcion: 'EVENTO REPROGRAMADO ',
  participantes: 'Fonseca',
  cupos: 121,
  fecha: "2022-03-25",
  localidad: "Localidad VIP",
  precio: "$212",
  lugar: "Coliseo General Rumiñahui - QUITO",
  hora: "21:00:00",
  img: "https://i.imgur.com/ptldFcz.jpg",
},
{
  titulo: 'Santiago Cruz - Sinfonico',
  descripcion: 'Sin novedad',
  participantes: 'Santiago Cruz',
  cupos: 99,
  fecha: "2022-03-25",
  localidad: "Butacas VIP",
  precio: "$90",
  lugar: "Teatro Nacional Del CCE",
  hora: "21:00:00",
  img: "https://i.imgur.com/ftiYfMu.png",
}
];

clickedRows = new Set<EventoInterface>();*/