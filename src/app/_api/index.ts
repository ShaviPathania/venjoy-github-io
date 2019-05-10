import { Injectable } from '@angular/core';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(
    public posts: Posts
  ) { }

}