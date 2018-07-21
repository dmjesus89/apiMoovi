import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CommentsProvider } from '../../providers/comments/comments';
import { AvaliacaoProvider } from '../../providers/avaliacao/avaliacao';

/**
 * Generated class for the AddAvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-avaliacao',
  templateUrl: 'add-avaliacao.html',
})
export class AddAvaliacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private avaliacaoProvider: AvaliacaoProvider, public viewCTrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAvaliacaoPage');
  }


  addAvaliacao(avaliacaoText) {
    let id = this.navParams.get("id") || 5
    this.avaliacaoProvider.addAvaliacao(avaliacaoText)
    alert("sucesso");
    this.closeModal()
  }

  closeModal() {
    this.viewCTrl.dismiss();
  }

}
