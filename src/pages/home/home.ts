import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { MovieDetailsPage } from '../movie-details/movie-details';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    Camera
   ]
})
export class HomePage {

  movies: any = []

  constructor(public navCtrl: NavController, public  moviesProdider: MoviesProvider,private camera: Camera) {
    this.moviesProdider.getPopularMovies().then(response => {
      console.log(response);
      this.movies = response;
    });
  }

  goToDetails(id){
    this.navCtrl.push(MovieDetailsPage, {
      id:id
    });
  }

}
