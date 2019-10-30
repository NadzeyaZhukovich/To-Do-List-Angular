import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './model/response';
import { User } from './model/user';
import { LocalStorageService } from './local-storage.service';
import { BaseServiceConst} from './base.service.const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private localStorage: LocalStorageService) { }

  private userApiUrl = `${BaseServiceConst.BASE_API_URL}/users`;
  private sessionsApiUrl = `${BaseServiceConst.BASE_API_URL}/sessions`;

  createAccount(user: User): Observable<Response> {
    return this.http.post<Response>(this.userApiUrl, user);
  }

  signIn(user: User): Observable<Response> {
    return this.http.post<Response>(this.sessionsApiUrl, user);
  }

  logOut(): Observable<Response> {
    const sessionId = this.localStorage.get('session_id');
    const accessToken = this.localStorage.get('access_token');
    return this.http.delete<Response>(
      `${this.sessionsApiUrl}/${sessionId}`,
      { headers: {'Authorization' : accessToken} }
    );
  }
}
