import { Component, OnInit } from '@angular/core';
import { Api } from '../../../api';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';

declare var tui;

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {

  post: any = {};
  md = '';
  editor = null;

  postTitle = new FormControl('', [Validators.required]);
  postExcerpt = new FormControl('', [Validators.required]);
  postMdPath = new FormControl('', [Validators.required]);

  constructor(
    private api: Api,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.route.params.subscribe(param => {
      if (param.id) {
        this.loadPost(param.id);
      } else {
        this.renderEditor();
      }
    })
  }

  loadPost(id) {
    this.api.posts.retrieve(id).pipe(
      switchMap(post => {
        this.post = post;
        this.postTitle.setValue(this.post.title);
        this.postExcerpt.setValue(this.post.excerpt);
        this.postMdPath.setValue(this.api.posts.postMdPath(this.post));

        return this.api.posts.retrievePostMdByPost(this.post);
      })
    ).subscribe(text => {
      this.md = text;
      this.renderEditor();
    })
  }

  renderEditor() {
    this.editor = new tui.Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'wysiwyg',
      initialValue: this.md,
      previewStyle: 'vertical',
      height: '500px',
    });
  }

  getErrorMessage(field: string) {
    return '';
  }

}