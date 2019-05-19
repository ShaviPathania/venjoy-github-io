import { Injectable } from '@angular/core';
import { Posts } from './posts';
import { Github } from './github';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(
    public posts: Posts,
    public github: Github,
  ) { }

}