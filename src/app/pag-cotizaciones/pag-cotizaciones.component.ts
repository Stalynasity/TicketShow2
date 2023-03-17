import { Component, OnInit } from '@angular/core';
import { ServicioInterface } from '../interfaces/ServicioInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosComponent } from '../servicios/servicios.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CotizacionesService } from '../../cotizaciones.service';
import { FormControl, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-pag-cotizaciones',
  templateUrl: './pag-cotizaciones.component.html',
  styleUrls: ['./pag-cotizaciones.component.css']
})


export class PagCotizacionesComponent implements OnInit {

  //listCotizaciones: ServicioInterface[] = [];
  dataSource: any = [];
  displayedColumns: string[] = ['nombre', 'tipo_evento', 'nombre_organizador', 'email', 'pos_lugar'];
  //dataSource!: MatTableDataSource<any>;

  data = [{
    nombre: 'Picnic Retro',
    tipo_evento: 'EVENTO REPROGRAMADO LOU completa ',
    nombre_organizador: 'JC Producciones',
    email: "aaa@gmail.com",
    pos_lugar: "aaaa",
    id_ciudad: 1
  }
  ];

  constructor(private service: CotizacionesService, private router: Router) {
  };


  ngOnInit(): void {
    this.CotizacionesConsultar.value.Transaccion = "CCONSULTAR_TODOS_SERVICIOS";

    this.service.getCotizaciones(this.CotizacionesConsultar.value as ServicioInterface).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<ServicioInterface>(data as ServicioInterface[]);
      console.log(data);
    },
      (errorData) => (alert("Usuario no autorizado"),
        this.router.navigate(['/'])))
  }

  CotizacionesConsultar = new FormGroup({
    Transaccion: new FormControl()
  })


}
