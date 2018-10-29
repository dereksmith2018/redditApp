import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Subreddit } from '../subreddit.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{
  addPost: number = null;

 constructor(public route: ActivatedRoute, private location: Location ){}




  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.addPost = parseInt(urlParameters['id']);
    });
    
  }

}
