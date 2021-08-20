import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../pages/interfaces/heroes.interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  private BaseUrl: string = environment.baseUrl;
  getHeroes():Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.BaseUrl}/heroes`);
  }

  getHeroe(id: string): Observable<Heroe[]> {
    
    return this.http.get<Heroe[]>(`${this.BaseUrl}/heroes/${id}`);
    
  }  
  

  getsubgerencias(termino:string):Observable<Heroe[]> {
    
    return this.http.get<Heroe[]>(`${this.BaseUrl}/heroes?q=${termino}&_limit=6`);
  }

  agregarHeroe(heroe: Heroe):Observable<Heroe>{
    
    return this.http.post<Heroe>(`${this.BaseUrl}/heroes`, heroe);
  }

ActualizarHeroe(heroe: Heroe):Observable<Heroe>{
    
    return this.http.put<Heroe>(`${this.BaseUrl}/heroes/${heroe.id}`, heroe);
  }


  BorrarHeroe(id: string):Observable<any>{
    
    return this.http.delete<any>(`${this.BaseUrl}/heroes/${id}`);
  }


}


