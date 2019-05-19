import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Posts {

  constructor(
    private httpClient: HttpClient
  ) { }

  list() {
    const url = 'assets/data/posts.json';
    return <Observable<any[]>> this.httpClient.get(url);
  }

  retrievePostMdByPath(path: string) {
    const url = `assets/data/posts/${path}`;
    return <Observable<string>> this.httpClient.get(url, {
      responseType: 'text'
    });
  }

  postMdPath(post: any) {
    return post.mdFullPath.replace('assets/data/posts/', '');
  }

}