import { Component } from '@angular/core';
import { TestApiService } from 'src/app/service/api/test-api.service';
import { ImportJsService } from 'src/app/service/Import-js/import-js.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [ ImportJsService ]
})

export class StoreComponent {
  testProducts: any[] = [];
  testCategory: any[] = [];

  constructor(private testApiService: TestApiService, private _storeJs: ImportJsService)
  {
    _storeJs.Carga(["store/store"]);
  }

  ngOnInit(): void{
    this.getProductsJson();
    this.getCategoriesJson();
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
