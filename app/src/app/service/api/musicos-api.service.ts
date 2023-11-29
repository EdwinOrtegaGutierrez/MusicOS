import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicosApiService {
  // Inicio de sesion de cliente de forma auth local
  private loginClientUrl = "http://localhost:5094/api/Cliente/Login";
  private categoriasUrl = "http://localhost:5094/api/Albumes/categorias";
  private masVendidosUrl = "http://localhost:5094/api/Albumes/Mas_Vendidos";
  private principalesGenerosUrl = "http://localhost:5094/api/Albumes/Principales_Generos";
  private createClientUrl = "http://localhost:5094/api/Cliente/Create_Client";
  private albumesUrl = "http://localhost:5094/api/Albumes/Albumes";
  private albumImageUrl = "localhost:5094/api/Images/getImage/";
  private albumCategoriesUrl = "http://localhost:5094/api/Albumes/Albumes_Categorias?categoria";
  private carritoUrl = "http://localhost:5094/api/Carrito/getCarrito?id_cliente";

  imageSrc: string | ArrayBuffer | null = null;

  constructor(private http: HttpClient) { }
  
  // Método GET
  loginCliente(email: string, password: string): Observable<any> {  
    return this.http.get<any>(this.loginClientUrl+`?correo=${email}&contraseña=${password}`);
  }

  categorias(): Observable<any>{
    return this.http.get<any>(this.categoriasUrl);
  }

  masVendidos(): Observable<any>{
    return this.http.get<any>(this.masVendidosUrl);
  }

  principalesGeneros(): Observable<any>{
    return this.http.get<any>(this.principalesGenerosUrl);
  }

  albumes(): Observable<any> {
    return this.http.get<any>(this.albumesUrl);
  }

  albumImage(id: number): Observable<any>{
    
    return this.http.get<any>(this.albumImageUrl+id);
  }

  albumCategories(category: string){
    return this.http.get<any>(this.albumCategoriesUrl+`=${category}`);
  }

  carrito(id: number){
    return this.http.get<any>(this.carritoUrl+`=${id}`);
  }

  // Método POST
  createClient(body: any): Observable<any>{
    const headers = { 'Content-Type': 'application/json'}
    return this.http.post<any>(this.createClientUrl, body, {'headers':headers});
  }
}
