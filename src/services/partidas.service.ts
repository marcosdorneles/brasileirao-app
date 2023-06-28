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
  // private apiKeyTeste = 'test_3e9c120b8b11f09b3f9b89ff82ab3d'

  constructor(private http: HttpClient) {
   }

  obterDadosTabela() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    return this.http.get(this.apiUrl, { headers });
  }
}
