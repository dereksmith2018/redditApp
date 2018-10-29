import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subreddit } from '../subreddit.model';


@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent{
 

 constructor(public router: Router) {}
  subreddit: Subreddit[]=[
  new Subreddit("NBA")
  ]
  delete(sub){
    let clickedSub = this.subreddit.indexOf(sub);
      this.subreddit.splice(clickedSub, 1);
  }
  addSub(title){
    
    let newSub = new Subreddit(title);
    this.subreddit.push(newSub);
    console.log(newSub);
  }
 
}
