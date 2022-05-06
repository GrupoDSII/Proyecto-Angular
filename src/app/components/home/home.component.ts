import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  
  @Input() producto : Producto ={
    id:"",
    nombre:"",
    imagen:"",
    precio:0.00
    }
  @Output()ProductoAgregado = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  onAgregarCarrito(): void {
    this.ProductoAgregado.emit(this.producto);
  }

}
