import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './model/toDo';
import { TaskResponse } from './model/response';
import { BaseServiceConst} from './base.service.const';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tasksApiUrl = `${BaseServiceConst.BASE_API_URL}/tasks`;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<TaskResponse> {
    return this.http.get<TaskResponse>(
      this.tasksApiUrl
    );
  }

  addTask(todo: ToDo): Observable<TaskResponse> {
    return this.http.post<TaskResponse>(
      this.tasksApiUrl,
      todo
    );
  }

  deleteTask(todo: ToDo): Observable<null> {
    const url = `${this.tasksApiUrl}/${todo.id}`;
    return this.http.delete<null>(
      url
    );
  }

  updateTask(todo: ToDo): Observable<TaskResponse> {
    const url = `${this.tasksApiUrl}/${todo.id}`;
    const body = { completed : todo.completed };
    return this.http.patch<TaskResponse>(
      url,
      body
    );
  }
}
