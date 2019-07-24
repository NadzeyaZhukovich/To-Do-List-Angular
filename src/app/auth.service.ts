import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from './model/response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private baseApi = 'https://api.tasks.alexzh.com/v1';
  private userApi = `${this.baseApi}/users`;
  private sessionsApi = `${this.baseApi}/sessions`;

  createAccount(fullName: string, userName: string, password: string): Observable<Response> {
    const body = {
      "fullname": fullName,
      "username": userName,
      "password": password
    }
    return this.http.post<Response>(this.userApi, body);
  }

  signIn(userName: string, password: string) {
    const body = {
      "username": userName,
      "password": password
    }
    return this.http.post<Response>(this.sessionsApi, body);
  }
}
