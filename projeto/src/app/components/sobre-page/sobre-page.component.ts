import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-page',
  templateUrl: './sobre-page.component.html',
  styleUrls: ['./sobre-page.component.css']
})
export class SobrePageComponent implements OnInit {

  title = 'Projeto do Hackthon Decola 2020';
  descricao = 'Projeto de exemplo fornecido para estudo.';
  copyright = 'Copyright 2020 Iteris Consultoria e Software LTDA';

  constructor() { }

  ngOnInit(): void {
  }

}
