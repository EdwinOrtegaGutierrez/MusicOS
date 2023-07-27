import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonApiService {
  private url = "../../../assets/json/workTeam.json";
  constructor(private http:HttpClient) {}

  public getData(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
