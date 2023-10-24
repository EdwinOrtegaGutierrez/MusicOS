import { Component } from '@angular/core';
import { TestApiService } from 'src/app/service/api/test-api.service';
import { ImportJsService } from 'src/app/service/Import-js/import-js.service';
import { MusicosApiService } from '../../service/api/musicos-api.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [ ImportJsService ]
})

export class StoreComponent {
  // Variable que podras consumir en el HTML
  categories: any[] = [];
  testProducts: any[] = [];
  testCategory: any[] = [];

  constructor(private testApiService: TestApiService, private _storeJs: ImportJsService, private musicosApiService: MusicosApiService)
  {
    _storeJs.Carga(["store/store"]);
  }

  ngOnInit(): void{
    this.categorias();
    // FUNCIONES DE PRUEBA, ELIMINARLAS CUANDO HAYAN CONCLUIDO LAS PRUEBAS
    this.getProductsJson();
    this.getCategoriesJson();
  }

  categorias(){
    this.musicosApiService.categorias().subscribe(_categorias => { this.categories = _categorias.generos; });
  }

  getProductsJson(){
    this.testApiService.getProducts().subscribe(testProducts => {
      this.testProducts = testProducts;
    });
  }

  getCategoriesJson(){
    this.testApiService.getCategories().subscribe(testCategory => {
      this.testCategory = testCategory; 
    });
  }
}
