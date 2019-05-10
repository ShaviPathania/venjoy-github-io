import { Injectable } from '@angular/core';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public posts: Posts
  ) { }

}