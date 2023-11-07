import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*
  export class CarritoComponent {
    listaItemsCarrito: ItemCarrito[] | undeined;

    ngOnInit(): void{
      let carritoStorage = localStorage.getItem("carrito") as string;
      let carrito = JSON.parse(carritoStorage);
      this.listaItemsCarrito = carrito
    }
  }

  vaciarCarrito(){
    localStorage.clear();
    listaItemsCarrito = [];
  }
  */
}
