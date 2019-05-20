import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as showdown from 'showdown';
import { DomSanitizer } from '@angular/platform-browser';
import { Api } from '../../../api';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  md: any = ''
  loading = false

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private domSanitizer: DomSanitizer,
    private api: Api,
  ) { }

  ngOnInit() {
    this.loadPost(this.router.url);
  }

  loadPost(path: string) {
    this.loading = true;
    const converter = new showdown.Converter();
    this.api.posts.retrievePostMdByPath(path).subscribe(text => {
      this.md = this.domSanitizer.bypassSecurityTrustHtml(converter.makeHtml(text));
      this.loading = false;
    })
  }

}