import { Component, OnInit } from '@angular/core';
import { Api } from '../../../api';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  posts = []

  constructor(
    private api: Api,
  ) { }

  ngOnInit() {
    this.api.posts.list().subscribe(posts => this.posts = posts);
  }

}