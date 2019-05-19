import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Base64 } from 'js-base64';

@Injectable({
  providedIn: 'root'
})
export class Github {

  private subject$ = new ReplaySubject(1);

  constructor(
    private httpClient: HttpClient
  ) { 
    this.subject$.next(this.checkLoggedIn())
  }

  isLoggedIn() {
    return <Observable<boolean>> this.subject$.asObservable();
  }

  loginViaBasicAuth(username: string, password: string) {
    const basicAuthToken = Base64.encode(username + ':' + password);
    return this.httpClient.get('https://api.github.com/user', {
      headers: {
        'Authorization': 'Basic ' + basicAuthToken
      }
    }).pipe(
      map((response: any) => {
        if (!response.id) {
          return {
            'success': false,
            'response': response
          }
        }
        localStorage.setItem('github:basicAuthToken', basicAuthToken);
        localStorage.setItem('github:user', response);
        this.subject$.next(true);
        return {
          'success': true,
          'response': response
        }
      })
    )
  }

  logout() {
    localStorage.removeItem('github:basicAuthToken');
    localStorage.removeItem('github:user');
    this.subject$.next(this.checkLoggedIn());
  }

  private checkLoggedIn() {
    return localStorage.getItem('github:basicAuthToken') ? true : false;
  }
}