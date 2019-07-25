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
  //       use isTokenExpired function
  accessToken = this.localStorageService.get('access_token', 0);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.accessToken != null && this.accessToken != 0) {
      return true;
    } else {
      this.router.navigateByUrl('/login/sign-in', {
        queryParams: {
          return: state.url
        }
      });
    }
    return false;
  }

}
