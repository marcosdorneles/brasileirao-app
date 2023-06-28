import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TimeComponent } from 'src/components/time/time.component';

@Injectable({
  providedIn: 'root'
})
export class TabelaServiceService {

  private apiUrl = 'https://api.api-futebol.com.br/v1/campeonatos/10/tabela';
  private apiKey = 'live_65451dc94e1418ea344cc21fa29027';
  private apiKeyTeste = 'test_3e9c120b8b11f09b3f9b89ff82ab3d'

  constructor(private http: HttpClient) { }

  obterDadosTabela() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKeyTeste}`);
    return this.http.get(this.apiUrl, { headers });
  }
}
