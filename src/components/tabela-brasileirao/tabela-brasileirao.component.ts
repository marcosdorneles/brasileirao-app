import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TabelaServiceService } from 'src/services/tabela-service.service';

@Component({
  selector: 'app-tabela-brasileirao',
  templateUrl: './tabela-brasileirao.component.html',
  styleUrls: ['./tabela-brasileirao.component.scss']
})
export class TabelaBrasileiraoComponent {

  dadosDaAPI: any;

  constructor(private http: HttpClient, private service: TabelaServiceService) { }

  ngOnInit() {
    this.service.obterDadosTabela().subscribe((dados) => {
      this.dadosDaAPI = dados;
    });
  }
}
