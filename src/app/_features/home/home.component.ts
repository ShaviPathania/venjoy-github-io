import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  posts = [
  ]

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    const url = 'assets/data/posts.json';
    this.httpClient.get(url).subscribe((posts: []) => this.posts = posts)
  }

}