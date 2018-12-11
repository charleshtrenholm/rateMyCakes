import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'public';
  cakeURL: string;
  bakerName: string;
  allCakes: any;
  ratingNumber: any;
  ratingComment: any;
  cakeClicked: any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.cakeURL = '';
    this.bakerName = '';
    this.ratingNumber = {}
    this.ratingComment = {}
    this.getAllCakes()
  }

  getAllCakes(){
    let observable = this._httpService.getCakes()
    observable.subscribe(data => {
      console.log("GOT ALL CAKE DATA ->->->", data)
      this.allCakes = data;
      console.log("ALL CAKES: ", this.allCakes)
      console.log("rating number and comment", this.ratingNumber, this.ratingComment)
      for(var i = 0; i < this.allCakes.length; i++){
        var id = this.allCakes[i]._id;
        this.ratingNumber[id] = "5";
        this.ratingComment[id] = "";
      }
      console.log("HOHO", this.ratingNumber, this.ratingComment);
    })
  }

  newCakeAdded(){
    let cakeData = {baker: this.bakerName, imageURL: this.cakeURL}
    let observable = this._httpService.postNewCake(cakeData);
    observable.subscribe(data => {
      console.log("GOT DATA :: :: :: >", data);
      this.getAllCakes()
    })
  }

  cakeRatingAdded(id: string){
    let newCakeRating = {rating: this.ratingNumber[id], comment: this.ratingComment[id]}
    let observable = this._httpService.postNewRating(newCakeRating, id)
    observable.subscribe(data => {
      console.log("datatata", data);
      this.getAllCakes()
      if(this.cakeClicked._id == id){
        this.showRatings(id);
      }
    })
  }

  showRatings(id: string){
    for(var i = 0; i < this.allCakes.length; i++){
      if (this.allCakes[i]._id == id){
        this.cakeClicked = this.allCakes[i];
      }
    }
    console.log("THIS.CAKECLICKED +++++>", this.cakeClicked);
  }

}
