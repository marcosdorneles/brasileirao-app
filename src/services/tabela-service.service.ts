import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TimeComponent } from 'src/components/time/time.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabelaServiceService {

  private apiUrl = 'https://api.api-futebol.com.br/v1/campeonatos/10/tabela';
  private apiKey:string = environment.apiKey


  constructor(private http: HttpClient) { }

  obterDadosTabela() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    return this.http.get(this.apiUrl, { headers });
  }
}
