import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './model/response';
import { User } from './model/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private localStorage: LocalStorageService) { }

  private baseApi = 'https://api.tasks.alexzh.com/v1';
  private userApi = `${this.baseApi}/users`;
  private sessionsApi = `${this.baseApi}/sessions`;

  createAccount(user: User): Observable<Response> { 
    return this.http.post<Response>(this.userApi, user);
  }

  signIn(user: User): Observable<Response> {
    return this.http.post<Response>(this.sessionsApi, user);
  }

  logOut(): Observable<Response> {
    const sessionId = this.localStorage.get('session_id', 0);
    const accessToken = this.localStorage.get('access_token', 0);
    return this.http.delete<Response>(`${this.sessionsApi}/${sessionId}`, 
                                      { headers: {'Authorization' : accessToken} });
  } 
}
