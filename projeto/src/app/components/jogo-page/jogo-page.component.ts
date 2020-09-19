import { Component, OnInit } from '@angular/core';
import { JogosApiService } from 'src/app/services/jogosApi/jogos-api.service';
import { JogosModel } from 'src/app/services/jogosApi/jogos-model/jogos-model';

@Component({
  selector: 'app-jogo-page',
  templateUrl: './jogo-page.component.html',
  styleUrls: ['./jogo-page.component.css']
})
export class JogoPageComponent implements OnInit {

  listaJogos: JogosModel[];

  constructor(private jogosApi :JogosApiService) {

  }

  ngOnInit(): void {

    this.jogosApi.List().subscribe((lista) => {
      this.listaJogos = lista;
    })
  }

}
