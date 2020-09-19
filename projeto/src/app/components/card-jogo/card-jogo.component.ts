import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-jogo',
  templateUrl: './card-jogo.component.html',
  styleUrls: ['./card-jogo.component.css']
})
export class CardJogoComponent implements OnChanges {

  @Input() jogo: JogoModel;

  imgUrl: string;
  genre:string;
  name:string;
  plataform:string;
  year:string;



  constructor() { }

  ngOnChange(): void {
    if (this.jogo!= null) {

      this.imgUrl = this.jogo.image;
      this.genre = this.jogo.genre;
      this.name = this.jogo.name;
      this.plataform = this.plataform;
      this.year = this.jogo.year;

  }

}
