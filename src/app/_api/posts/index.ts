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

  postMdPath(post: any) {
    return post.fileFullPath.replace('assets/data/posts/', '');
  }

}