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
  videoUrl = ["https://youtu.be/_NElFLzgdUs","https://youtu.be/RJ1w-venSAE","https://youtu.be/sAEd4ye9-tU", "https://youtu.be/JSRtYpNRoN0", "https://youtu.be/kE7li_u1nmg","https://youtu.be/ERgrFVhL-n4", "https://youtu.be/u4-FCsiF5x4","https://youtu.be/u_CbHrBbHNQ","https://youtu.be/1FWhdBXJ_ts","https://youtu.be/krpajE6dCTg"];



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
