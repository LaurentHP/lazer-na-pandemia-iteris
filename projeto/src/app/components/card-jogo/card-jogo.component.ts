import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JogosModel } from 'src/app/services/jogosApi/jogos-model/jogos-model';

@Component({
  selector: 'app-card-jogo',
  templateUrl: './card-jogo.component.html',
  styleUrls: ['./card-jogo.component.css']
})
export class CardJogoComponent implements OnChanges {

  @Input() jogo: JogosModel;

  imgUrl: string;
  genre:string;
  name:string;
  platform:string [];
  year:number;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.jogo!= null) {

      this.imgUrl = this.jogo.photo;
      this.genre = this.jogo.genre;
      this.name = this.jogo.name;
      this.platform = this.jogo.platform;
      this.year = this.jogo.year;

  }
  }



}
