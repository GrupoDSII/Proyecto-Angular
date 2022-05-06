import { Component, OnInit } from '@angular/core';
import { productoo } from 'src/app/interfaces/productoo';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styles: [
  ]
})
export class InventarioComponent implements OnInit {
  public producto:productoo=this.productoVacio();
public productos: productoo[]=[];
public productos1: productoo[]=[];
public productos2: productoo[]=[];

// public alumno:alumno=this.alumnoVacio();
// public alumnos: alumno[]=[];

   onDatos(): void {
    // this.lista.push(this.alumno.nombre);
    console.log(this.producto);
    this.productos.push(this.producto);
    this.producto= this.productoVacio();
    console.log("el arreglo productos tiene:",this.productos.length,"elementos")

   }
   onDatos1(): void {
    // this.lista.push(this.alumno.nombre);
    console.log(this.producto);
    this.productos1.push(this.producto);
    this.producto= this.productoVacio();
    console.log("el arreglo productos tiene:",this.productos1.length,"elementos")

   }
   onDatos2(): void {
    // this.lista.push(this.alumno.nombre);
    console.log(this.producto);
    this.productos2.push(this.producto);
    this.producto= this.productoVacio();
    console.log("el arreglo productos tiene:",this.productos2.length,"elementos")

   }


   productoVacio(): productoo{
     return{
       nombre:"",
       descripcion:"",
       precio: 0,
       cantidad: 0
     };
   }
   onEliminar(i: number):void{
    //  this.lista.splice(i,1);
    this.productos.splice(i,1);
   }
   onEliminar1(i: number):void{
    //  this.lista.splice(i,1);
    this.productos1.splice(i,1);
   }
   onEliminar2(i: number):void{
    //  this.lista.splice(i,1);
    this.productos2.splice(i,1);
   }

  constructor() { }

  ngOnInit(): void {
  }

}
