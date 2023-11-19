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

  constructor(private _storeJs: ImportJsService, private testApiService: TestApiService, private musicosApiService: MusicosApiService){
    _storeJs.Carga(["store/store"]);
  }

  ngOnInit(): void{
    this.getCategoriesJson();
    this.getProductsByCategoryJson();
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
}
