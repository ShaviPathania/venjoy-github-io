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

  getFile(path: string) {
    const url = `https://api.github.com/repos/shavipathania/venjoy-github-io/contents/${path}`;
    return this.httpClient.get(url, this.authorizedConfig()).toPromise();
  }

  async saveFile(path: string, content: string) {
    const url = `https://api.github.com/repos/shavipathania/venjoy-github-io/contents/${path}`;
    let githubFile = null;
    try {
      githubFile = await this.getFile(path);
    } catch(error) {}
    const data: any = {
      message: 'auto commit',
      content: Base64.encode(content),
    };
    if (githubFile) data.sha = githubFile.sha;
    return this.httpClient.put(url, data, this.authorizedConfig()).toPromise();
  }

  private authorizedConfig() {
    return {
      headers: {
        'Authorization': 'Basic ' + localStorage.getItem('github:basicAuthToken')
      }
    }
  }

  private checkLoggedIn() {
    return localStorage.getItem('github:basicAuthToken') ? true : false;
  }
}