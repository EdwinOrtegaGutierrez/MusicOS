import { Component } from '@angular/core';
import { ImportJsService } from 'src/app/service/Import-js/import-js.service';
import { TestApiService } from 'src/app/service/api/test-api.service';
import { MusicosApiService } from 'src/app/service/api/musicos-api.service';

@Component({
  selector: 'app-store-generos',
  templateUrl: './store-generos.component.html',
  styleUrls: ['./store-generos.component.css'],
  providers:[ ImportJsService ]
})
export class StoreGenerosComponent {
  categories: any[] = [];
  albumes: any[] = [];
  imageUrl: string = "http://localhost:5094/api/Images/getImage/";
  id_client: number = 0;

  constructor(private _storeJs: ImportJsService, private testApiService: TestApiService, private musicosApiService: MusicosApiService){
    _storeJs.Carga(["store/store"]);
  }

  ngOnInit(): void{
    this.getCategoriesJson();
    this.getProductsByCategoryJson();
    
    this.id_client = parseInt(this.getCookieValue("id"));
  }
  
  getCategoriesJson(){
    this.musicosApiService.categorias().subscribe(_categorias => { this.categories = _categorias.generos; });
  }

  getProductsByCategoryJson(){
    var url = window.location.pathname;
    var parts = url.split('/');
    var category = parts[parts.length - 1];
    this.musicosApiService.albumCategories(category.toLowerCase()).subscribe(albumes => {
      this.albumes = albumes.albumes;
    });
  }

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
