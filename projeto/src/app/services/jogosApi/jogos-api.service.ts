import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JogosModel } from './jogos-model/jogos-model';

@Injectable({
  providedIn: 'root'
})
export class JogosApiService {

  constructor(private httpClient: HttpClient) {

  }
  public List ():Observable<JogosModel[]> {
    return this.httpClient.get<JogosModel[]>('https://it3yui.firebaseio.com/lazer/jogos.json?print=pretty');
  }

}
