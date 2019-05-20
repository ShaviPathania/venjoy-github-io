import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Github } from '../github';

export interface Post {
  id: number
  title: string
  excerpt: string
  mdFullPath: string
}

@Injectable({
  providedIn: 'root'
})
export class Posts {

  constructor(
    private httpClient: HttpClient,
    private github: Github,
  ) { }

  list() {
    const url = 'assets/data/posts.json';
    return <Observable<any[]>> this.httpClient.get(url);
  }

  retrieve(id) {
    return <Observable<Post>> this.list().pipe(
      map((posts, idx) => {
        const post = posts.find((p, idx) => idx == id);
        post.id = idx;
        return post;
      })
    );
  }

  retrievePostMdByPost(post: any) {
    const url = post.mdFullPath;
    return <Observable<string>> this.httpClient.get(url, {
      responseType: 'text'
    });
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

  postFullMdPath(mdPath: string) {
    return 'assets/data/posts/' + mdPath;
  }

  async save(post: Post, postMd: string) {
    const posts = await this.list().toPromise();
    if (post.id >= 0) {
      posts[post.id] = post;
    } else {
      posts.push(post);
    }    
    await this.github.saveFile('src/assets/data/posts.json', JSON.stringify(posts));
    await this.github.saveFile('src/'+post.mdFullPath, postMd);
  }

}