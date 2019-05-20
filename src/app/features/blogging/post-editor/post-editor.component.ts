import { Component, OnInit } from '@angular/core';
import { Api } from '../../../api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {

  post: any = {};
  md;

  constructor(
    private api: Api,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(console.log)
    // this.api.posts.retrieve()
    // this.api.posts.retrievePostMdByPath(path).subscribe(text => {
    //   this.md = text;
    // })
  }



}