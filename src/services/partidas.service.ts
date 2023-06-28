import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as fs from 'fs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PartidasService {

  private apiUrl = 'https://api.api-futebol.com.br/v1/campeonatos/10/rodadas';
  private apiKey:string = environment.apiKey


  constructor(private http: HttpClient) {

   }

  obterDadosTabela() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    return this.http.get(this.apiUrl, { headers });
  }
}
