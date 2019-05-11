import { Component, OnInit, Input } from '@angular/core';
import { Api } from '../../../_api';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {

  @Input()
  post: any;

  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    
  }

  getPath() {
    return this.api.posts.postMdPath(this.post);
  }

}