import { Component } from '@angular/core';
import { ImportJsService } from 'src/app/service/Import-js/import-js.service';
import { MusicosApiService } from '../../service/api/musicos-api.service';
import { ItemCarrito } from './ItemCarrito';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [ ImportJsService ]
})

export class StoreComponent {
  // Variable que podras consumir en el HTML
  categories: any[] = [];
  albumProducts: any[] = [];
  testCategory: any[] = [];
  item = this.albumProducts;
  imageUrl: string = "http://localhost:5094/api/Images/getImage/";
  id_client: number = 0;

  constructor(private _storeJs: ImportJsService, private musicosApiService: MusicosApiService)
  {
    _storeJs.Carga(["store/store"]);
  }

  ngOnInit(): void{
    this.categorias();
    // FUNCIONES DE PRUEBA, ELIMINARLAS CUANDO HAYAN CONCLUIDO LAS PRUEBAS
    this.getProductsJson();
    
    this.id_client = parseInt(this.getCookieValue("id"));
  }

  categorias(){
    this.musicosApiService.categorias().subscribe(_categorias => { this.categories = _categorias.generos; });
  }

  getProductsJson(){
    this.musicosApiService.albumes().subscribe(products => {
      this.albumProducts = products.albumes;
    });
    console.log(this.albumProducts);
  }

  //agrega items a la tabla del carrito

  addCarrito(id_album: number, id_cliente: number, precio: number){
    const cantidad = parseInt(prompt("Ingresa la cantidad: ") || ""); 

    const total = cantidad * precio; 
    

    // Obtener datos
    let body = {
      "id_album": id_album,
      "id_cliente": id_cliente,
      "cantidad": cantidad,
      "total": total
    }

    // Agregar
    this.musicosApiService.addCarrito(body).subscribe( response => {
      alert(response);
    });
    window.location.reload();
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
