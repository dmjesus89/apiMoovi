import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { AddCommentPage } from '../add-comment/add-comment';
import { CommentsProvider } from '../../providers/comments/comments';
import { AddAvaliacaoPage } from '../add-avaliacao/add-avaliacao';
import { AvaliacaoProvider } from '../../providers/avaliacao/avaliacao';

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {

  movieId: number;
  movie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService: MoviesProvider,
    public modalCtrl: ModalController, private commentsProvider: CommentsProvider, private avaliacaoProvider: AvaliacaoProvider,) {
    this.movieId = this.navParams.get("id");
    this.movieService.getDetailMovie(this.movieId).then(response => {
      this.movie = response;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }

  getComments(){
    return this.commentsProvider.getComments()
  }

  addComment(){
    let commentModal = this.modalCtrl.create(AddCommentPage, { id: this.movieId });
    commentModal.present()
  }

  backToList(){
    this.navCtrl.pop();
  }

  addAvaliacao(){
    let avaliacaoModal = this.modalCtrl.create(AddAvaliacaoPage, { id: this.movieId });
    avaliacaoModal.present()
  }

  getAvaliacoes(){
    return this.avaliacaoProvider.getAvaliacoes()
  }

}
