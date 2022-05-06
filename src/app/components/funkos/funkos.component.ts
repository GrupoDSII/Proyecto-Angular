import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-funkos',
  templateUrl: './funkos.component.html',
  styles: [
  ]
})
export class FunkosComponent implements OnInit {
  productos: Producto[] = [
    {
      id:"1",
      nombre:"Funko Pop Rio - La Casa de Papel",
      imagen:"./assets/img/funkos/funko01.jpg",
      precio:65.00
      },
    {
      id:"2",
      nombre:"Funko Pop Moscú - La Casa de Papel",
      imagen:"./assets/img/funkos/funko02.jpg",
      precio:55.00
    },
    {
      id:"3",
      nombre:"Funko Pop Helsinki - La Casa de Papel",
      imagen:"./assets/img/funkos/funko03.jpg",
      precio:65.00
      },
    {
      id:"4",
      nombre:"Funko Pop Daenerys and Fiery Drogon",
      imagen:"./assets/img/funkos/funko04.jpg",
      precio:105.00
      },
    {
      id:"5",
      nombre:"Funko Pop  King Bran The Broken",
      imagen:"./assets/img/funkos/funko05.jpg",
      precio:60.00
    },
    {
      id:"6",
      nombre:"Funko Pop Theon Greyjoy - Game of Thrones",
      imagen:"./assets/img/funkos/funko06.jpg",
      precio:75.00
      }
  ];

  miCarrito: Producto[] = [];
  valorCarrito: number = 0;

  constructor(
    private tiendaService: TiendaService
  ) {
    this.miCarrito = this.tiendaService.getMiCarrito();
   }

  ngOnInit(): void {
  }

  onAgregarProducto(producto:Producto): void {
    console.log(producto.nombre,"agregado");
    console.table(this.miCarrito);

    this.tiendaService.AgregarProducto(producto);
    this.valorCarrito = this.tiendaService.calcularValor();
  }
}
