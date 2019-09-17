import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './model/toDo';
import { LocalStorageService } from './local-storage.service';
import { TaskResponse } from './model/response';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://alexzh.com/api/tasks/v1';
  tasksUrl = `${this.baseUrl}/tasks`;
  headers = { headers: this.generateAuthorizationHeader() };

  constructor(private http: HttpClient,
              private localStorage: LocalStorageService) { }

  getTasks(): Observable<TaskResponse> {
    return this.http.get<TaskResponse>(
      this.tasksUrl, 
      this.headers
    );
  }

  addTask(todo: ToDo): Observable<TaskResponse> {
    return this.http.post<TaskResponse>(
      this.tasksUrl, 
      todo,
      this.headers
    );
  }

  deleteTask(todo: ToDo): Observable<null> {
    const url = `${this.tasksUrl}/${todo.id}`;
    return this.http.delete<null>(
      url,
      this.headers
    );
  }

  updateTask(todo: ToDo): Observable<TaskResponse> {
    const url = `${this.tasksUrl}/${todo.id}`;
    const body = { completed : todo.completed };
    return this.http.patch<TaskResponse>(
      url,
      body, 
      this.headers
    );
  } 

  private generateAuthorizationHeader(): HttpHeaders {
    const accessToken = this.localStorage.get('access_token');
    return new HttpHeaders().set('Authorization', accessToken)
  }
}
