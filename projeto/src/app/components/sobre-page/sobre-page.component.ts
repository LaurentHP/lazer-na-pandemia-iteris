import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-page',
  templateUrl: './sobre-page.component.html',
  styleUrls: ['./sobre-page.component.css']
})
export class SobrePageComponent implements OnInit {

  title = 'Team 6';
  descricao = 'Desenvolvemos este projeto com o intuito de fornecer opções ao tédio em meio a quarentena. Dentro desta plataforma iremos falar um pouco sobre jogos digitais, de maneira acessível a todas as idades';
  copyright = 'Copyright 2020 Iteris Consultoria e Software LTDA';

  constructor() { }

  ngOnInit(): void {
  }

}
