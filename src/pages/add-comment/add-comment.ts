import { Component } from '@angular/core';
import { NavController, NavParams, Navbar, ViewController } from 'ionic-angular';
import { CommentsProvider } from '../../providers/comments/comments';
import { CommentModel } from '../../comment.model';

/**
 * Generated class for the AddCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-comment',
  templateUrl: 'add-comment.html'

})
export class AddCommentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private commentsProvider: CommentsProvider, public viewCTrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCommentPage');
  }


  addComment(commentText) {
    let id = this.navParams.get("id") || 5
    var comment: CommentModel = new CommentModel();
    comment.comment = commentText;
    comment.date = new Date();
    comment.movie_id = id;
    this.commentsProvider.addComment(comment)
    alert("sucesso");
    this.closeModal()
  }

  closeModal() {
    this.viewCTrl.dismiss();
  }

}
