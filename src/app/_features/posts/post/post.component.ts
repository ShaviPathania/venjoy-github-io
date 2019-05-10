import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as showdown from 'showdown';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  md = ''

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.loadPost(this.route.snapshot.params.postSlug);
  }

  loadPost(slug: string) {
    const converter = new showdown.Converter();
    const url = `assets/data/posts/${slug}.md`;
    this.httpClient.get(url, {
      responseType: 'text'
    }).subscribe(text => {
      this.md = converter.makeHtml(text);      
    })
  }

}