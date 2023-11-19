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

  constructor(private _storeJs: ImportJsService, private musicosApiService: MusicosApiService)
  {
    _storeJs.Carga(["store/store"]);
  }

  ngOnInit(): void{
    this.categorias();
    // FUNCIONES DE PRUEBA, ELIMINARLAS CUANDO HAYAN CONCLUIDO LAS PRUEBAS
    this.getProductsJson();
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
  
  agregarCarrito(item: any){
    // {}, [{}, {}], [0].Cout, {} == null
    // this.item.length != 0

    if (item && item.idproducto && item.nombre && item.precio) {
    let iCarrito : ItemCarrito = {
      idproducto: item.idproducto,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: 1
    }

    //Agrega al localStorage el item del carrito al que se le clickeo 
    if(localStorage.getItem("carrito") === null){
      let carrito: ItemCarrito[] = [];
      carrito.push(iCarrito);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    else{
      let carritoStorage = localStorage.getItem("carrito") as string;
      let carrito = JSON.parse(carritoStorage);
      
      let index = -1;
      for(let i = 0; i<carrito.length; i++){
        let itemC: ItemCarrito = carrito[i];
        if(iCarrito.idproducto === itemC.idproducto){
          index = i;
          break;
        }
      }
      
      //Si se clickea mas de una vez el mismo producto lo suma en una sola linea
      if(index === -1){
        carrito.push(iCarrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }
      else{
        let itemCarrito: ItemCarrito = carrito[index];
        itemCarrito.cantidad!++;
        carrito[index] = itemCarrito;
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }
    }   
  }
}}
