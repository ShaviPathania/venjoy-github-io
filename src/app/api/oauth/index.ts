import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

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

  private checkLoggedIn() {
    return localStorage.getItem('oauthToken') ? true : false;
  }
}