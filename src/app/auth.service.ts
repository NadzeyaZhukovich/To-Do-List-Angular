import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './model/response';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private baseApi = 'https://api.tasks.alexzh.com/v1';
  private userApi = `${this.baseApi}/users`;
  private sessionsApi = `${this.baseApi}/sessions`;

    createAccount(user: User): Observable<Response> { 
      return this.http.post<Response>(this.userApi, user);
  }

    signIn(user: User) {
      return this.http.post<Response>(this.sessionsApi, user);
  }
}
