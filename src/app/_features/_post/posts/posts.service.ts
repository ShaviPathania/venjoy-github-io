import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list() {
    const url = 'assets/data/posts.json';
    return this.httpClient.get(url);
  }

}