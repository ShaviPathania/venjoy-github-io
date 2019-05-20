import { Component, OnInit } from '@angular/core';
import { Api } from '../../../api';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts = []

  constructor(
    private api: Api,
  ) { }

  ngOnInit() {
    this.api.posts.list().subscribe(posts => this.posts = posts);
  }

}