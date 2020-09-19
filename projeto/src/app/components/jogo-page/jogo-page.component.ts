import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-page',
  templateUrl: './jogo-page.component.html',
  styleUrls: ['./jogo-page.component.css']
})
export class JogoPageComponent implements OnInit {
  listaJogos: JogoModel[];

  constructor(private imovelApi:ImoveisApiService) {

  }

  ngOnInit(): void {

    this.imovelApi.List().subscribe((lista) => {
      this.listaImoveis = lista;
    })
  }

}
