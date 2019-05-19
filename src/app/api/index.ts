import { Injectable } from '@angular/core';
import { Posts } from './posts';
import { Oauth } from './oauth';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(
    public posts: Posts,
    public oauth: Oauth,
  ) { }

}