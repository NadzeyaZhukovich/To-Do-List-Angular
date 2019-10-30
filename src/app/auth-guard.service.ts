import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private localStorageService: LocalStorageService) { }

  // TODO: check access token expire time: refresh access token is needed
  //      use isTokenExpired function
  accessToken = this.localStorageService.get('access_token');

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.accessToken) {
      this.router.navigateByUrl('/login/sign-in');
    }
    return true;
  }
}
