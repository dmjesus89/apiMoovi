import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolveDefinition } from '../../../node_modules/@angular/core/src/view/util';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {

  api = "https://api.themoviedb.org/3/movie/popular?api_key=a52d9333a1e4c0e822c4bd06a07fbf97";


  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }

  getPopularMovies() {
    return new Promise((resolve, reject) => {
      this.http.get(this.api).subscribe(response => {
        var data = response as any;
        resolve(data.results);

      }, error => {
        reject(error);
      });
    })
  }

  getDetailMovie(id) {
    let apiDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=a52d9333a1e4c0e822c4bd06a07fbf97`;
    return new Promise((resolve, reject) => {
      this.http.get(apiDetail)
      .subscribe(response => {
        var data = response as any;
        resolve(data);
      }, error => {
        reject(error);
      });
    })
  }

  geMovieDetails(id) {
    let apiDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=a52d9333a1e4c0e822c4bd06a07fbf97`;
    return new Promise((resolve, reject) => {
      this.http.get(apiDetail)
        .subscribe(response => {
          var data = response as any;
          resolve(data);
        }, error => {
          reject(error);
        });
    })
  }


}
