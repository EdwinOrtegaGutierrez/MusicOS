import { Component, OnInit } from '@angular/core';
import { MusicosApiService } from 'src/app/service/api/musicos-api.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productsItems: any[] = [];

  constructor(private musicosApiService: MusicosApiService) { }

  ngOnInit(): void {
    this.musicosApiService.carrito(parseInt(this.getCookieValue('id'))).subscribe(products => {
      this.productsItems = products.carrito;
    });
  }
  

  getCookieValue(cookieName: string) {
    const cookies = document.cookie.split(';'); // Divide la cadena de cookies en un arreglo
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim(); // Elimina espacios en blanco al inicio y final de la cookie
      // Verifica si la cookie comienza con el nombre buscado
      if (cookie.startsWith(`${cookieName}=`)) {
        return cookie.substring(cookieName.length + 1); // Devuelve el valor de la cookie
      }
    }
    return ""; // Devuelve null si la cookie no se encuentra
  }
}
