import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {
  private products = "https://fakestoreapi.com/products";
  private categories = "https://fakestoreapi.com/products/categories";

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any>{
    return this.http.get<any>(this.products);
  }

  public getCategories(): Observable<any>{
    return this.http.get<any>(this.categories);
  }

  // Obtener productos segun la categoria
  public getProductsByCategory(category: string): Observable<any>{
    const url = `https://fakestoreapi.com/products/category/${category}`;
    return this.http.get<any>(url);
  }
}
