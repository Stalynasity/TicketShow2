import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EventoInterface } from '../interfaces/EventoInterface';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit{

  dataSource: any = [];
  displayedColumns: string[] = ['titulo', 'descripcion', 'participantes', 'cupos', 'fecha', 'acciones']

  data = [{
    titulo: '0151245245',
    descripcion: 'Andrés Luis',
    participantes: 'Carvajal Lozano',
    cupos: 12,
    fecha: "2022-03-25",
  },
  {
    titulo: '0954658913',
    descripcion: 'Jorge Luis',
    participantes: 'Charco Aguirre',
    cupos: 12,
    fecha: "2022-03-25",
  },
  {
    titulo: '0957962158',
    descripcion: 'Andrea Lisbeth',
    participantes: 'Romero Haro',
    cupos: 12,
    fecha: "2022-03-25",
  }
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<EventoInterface>(this.data as EventoInterface[])
    console.log(this.data);
  }

}


