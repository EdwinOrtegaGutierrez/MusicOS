import { Component } from '@angular/core';
import { ImportJsService } from 'src/app/service/Import-js/import-js.service';
import { TestApiService } from 'src/app/service/api/test-api.service';

@Component({
  selector: 'app-store-generos',
  templateUrl: './store-generos.component.html',
  styleUrls: ['./store-generos.component.css'],
  providers:[ ImportJsService ]
})
export class StoreGenerosComponent {
  testCategory: any[] = [];
  testProductsByCategory: any[] = [];

  constructor(private _storeJs: ImportJsService, private testApiService: TestApiService){
    _storeJs.Carga(["store/store"]);
  }

  ngOnInit(): void{
    this.getCategoriesJson();
    this.getProductsByCategoryJson();
  }
  
  getCategoriesJson(){
    this.testApiService.getCategories().subscribe(testCategory => {
      this.testCategory = testCategory; 
    });
  }

  getProductsByCategoryJson(){
    var url = window.location.pathname;
    var parts = url.split('/');
    var category = parts[parts.length - 1];
    this.testApiService.getProductsByCategory(category).subscribe(testProductsByCategory => {
      this.testProductsByCategory = testProductsByCategory;
    });
  }
}
