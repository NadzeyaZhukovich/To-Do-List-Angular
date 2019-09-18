import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/local-storage.service';

@Injectable()
export class AuthorizationHeader implements HttpInterceptor {
    constructor( private localStorage: LocalStorageService ) { }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        const auth = request.clone({
            headers: request.headers.set('Authorization', this.localStorage.get('access_token')) 
        });
        return next.handle(auth);
      }
}
