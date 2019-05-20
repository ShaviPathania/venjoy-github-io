import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Base64 } from 'js-base64';

@Injectable({
  providedIn: 'root'
})
export class Oauth {

  private subject$ = new ReplaySubject(1);

  constructor(
    private httpClient: HttpClient
  ) { 
    this.subject$.next(this.checkLoggedIn())
  }

  isLoggedIn() {
    return <Observable<boolean>> this.subject$.asObservable();
  }

  basicAuth(username: string, password: string) {
    const basicAuthToken = Base64.encode(username + ':' + password);
    this.httpClient.get('https://api.github.com/user')
  }

  private checkLoggedIn() {
    return localStorage.getItem('basicAuthToken') ? true : false;
  }
}