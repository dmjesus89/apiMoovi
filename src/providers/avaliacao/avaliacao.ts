import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AvaliacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvaliacaoProvider {
  AVALIACAO_STORAGE_NAME: any = "AVALIACOES";

  constructor(public http: HttpClient) {
    console.log('Hello AvaliacaoProvider Provider');
  }


  addAvaliacao(avaliacao: string){
    var avaliacoes= [];
    var avaliacoes_storage = localStorage.getItem(this.AVALIACAO_STORAGE_NAME)
    if(avaliacoes_storage){
      avaliacoes = JSON.parse(avaliacoes_storage)
    }
    avaliacoes.push(avaliacao);
    localStorage.setItem(this.AVALIACAO_STORAGE_NAME, JSON.stringify(avaliacoes));
  }

  getAvaliacoes(){
    var avaliacoes= [];
    var avaliacoes_storage = localStorage.getItem(this.AVALIACAO_STORAGE_NAME)
    if(avaliacoes_storage){
      avaliacoes = JSON.parse(avaliacoes_storage)

      let total  = 0;
      for(let value of avaliacoes){
          total =+ value;
      }
      return total / avaliacoes.length;
    }
    return avaliacoes;
  }

}
