import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as showdown from 'showdown';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  md: any = ''

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private domSanitizer: DomSanitizer,
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
      this.md = this.domSanitizer.bypassSecurityTrustHtml(converter.makeHtml(text));
    })
  }

}