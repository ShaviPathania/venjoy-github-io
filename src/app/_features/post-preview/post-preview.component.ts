import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {

  @Input()
  post: any;

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.httpClient.get(`assets/posts/${this.post.fileName}.md`).subscribe(res => {
      console.log(res)
    })
  }

}