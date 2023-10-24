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
}
