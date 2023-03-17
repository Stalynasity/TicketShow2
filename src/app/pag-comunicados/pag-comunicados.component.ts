import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComentarioInterface } from '../interfaces/ComentarioInterface';
import { ComentarioService } from '../comentario.service';


@Component({
  selector: 'app-pag-comunicados',
  templateUrl: './pag-comunicados.component.html',
  styleUrls: ['./pag-comunicados.component.scss']
})
export class PagComunicadosComponent implements OnInit {

  nuevoCliente:any;
  nav: any;
  is:any;
  ultimoCliente:any;


  constructor(private service: ComentarioService, private router: Router) {
     this.nav = this.router.getCurrentNavigation();
     this.nuevoCliente = this.nav.extras.state;
    
     if (this.nuevoCliente != null)
     {      
       console.log(this.nuevoCliente.datosCliente.queryParams);
     }
    
  };

       dataSource: any = [];
       displayedColumns: string[] = ['mensaje']


      data = [ ];

   
      usuarioNuevo = new FormGroup({
      mensaje: new FormControl('',Validators.required),
    })

    mensajeTemp: any;
    onSubmit()
  {
    this.mensajeTemp = this.usuarioNuevo.value.mensaje;
    console.log(this.mensajeTemp)

    if(this.mensajeTemp.length !== 0){
      this.service.getComentario(this.mensajeTemp).subscribe((data:any) =>{
      this.dataSource = new MatTableDataSource<ComentarioInterface>(data as ComentarioInterface[]);
      console.log(data);
      this.ngOnInit();
    })
    } 

  }
  


  EliminarComentario(delecComentario:ComentarioInterface){

    

        this.service.DelecteComentario(delecComentario.mensaje).subscribe((data:any) =>{
          this.dataSource = new MatTableDataSource<ComentarioInterface>(data as ComentarioInterface[]);
          console.log(data);
          this.ngOnInit();
    });
  }



  ngOnInit(): void {

    this.ComentariosConsulta.value.Transaccion = "CONSULTAR_TOTAL_COMENTARIO";

    this.service.setComentario(this.ComentariosConsulta.value as ComentarioInterface).subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<ComentarioInterface>(data as ComentarioInterface[]);
      console.log(data);
    })

  


    
  
    this.noticiaAll=[{
      NombrePublic:"Franco Escamilla",
      imagen:"https://cdn.meet2go.com/wp-content/uploads/2022/11/21130342/escamillagye.jpg",
      ComenPublic:"Franco Escamilla el comediante hispanohablante más importante del mundo regresa a Ecuador con su nuevo show Gaby. EVENTO PARA TODO PÚBLICO",
      Entradas:"Muy pronto"
    },
    {
      imagen:"https://www.lunapark.com.ar/images/eventos/eventos/10805.jpg?1670508701",
      NombrePublic:"LP",
      ComenPublic:"sus shows dan que hablar y quedan grabados a fuego en la memoria de los asistentes. En su visita de 2019 donde agotó 2 Teatro Vorterix, la artista habló en entrevistas de la energía particular de sus seguidores argentinos, con quienes finalmente se reencontrará tras el hiato y los cambios de planes que trajo la pandemia.",
      Entradas:"Muy pronto"
        },
    {
      imagen:"https://cdn.meet2go.com/wp-content/uploads/2022/07/04142244/MON_LAFERTE_QUITO.jpg",
      NombrePublic:"Mon Laferte",
      ComenPublic:"Mon Laferte encabeza las nominaciones a los Premios Pulsar 2022. La reconocida cantante chilena postula de forma especial con sus dos discos lanzados durante 2021: “Seis” y “1940 Carmen”, sobresaliendo con cuatro nominaciones: Mejor Artista Pop, por su disco “1940 Carmen”, Mejor Cantautora, Mejor Grabación por su disco “Seis”, Mejor Álbum del Año por su disco “Seis” y Artista del Público, nueva categoría de votación popular.",
      Entradas:"Muy pronto"
        }
      ];
      
  }

  noticiaAll:{
    imagen:string;
    NombrePublic:string;
    ComenPublic:string;
    Entradas:string;
    }[] |undefined;

    ComentariosConsulta = new FormGroup({
      Transaccion: new FormControl()
    })

}



