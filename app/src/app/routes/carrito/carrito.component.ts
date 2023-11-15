import { Component, OnInit } from '@angular/core';
import { ItemCarrito } from '../store/ItemCarrito';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let carritoStorage = localStorage.getItem("carrito") as string;
    let carrito = JSON.parse(carritoStorage);
    this.listaItemsCarrito = carrito
  }
  
    listaItemsCarrito: ItemCarrito[] | undefined;

  

  vaciarCarrito(){
    localStorage.clear();
    this.listaItemsCarrito = [];
  }
  
}
