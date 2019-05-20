import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Api } from '../api';

@Injectable({
  providedIn: 'root'
})
export class OauthGuard implements CanActivate {

  constructor(
    private api: Api
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.api.github.isLoggedIn();
  }
}
