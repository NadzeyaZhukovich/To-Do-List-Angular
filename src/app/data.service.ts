import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './model/toDo';
import { TaskResponse } from './model/response';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://alexzh.com/api/tasks/v1';
  tasksUrl = `${this.baseUrl}/tasks`;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<TaskResponse> {
    return this.http.get<TaskResponse>(
      this.tasksUrl
    );
  }

  addTask(todo: ToDo): Observable<TaskResponse> {
    return this.http.post<TaskResponse>(
      this.tasksUrl, 
      todo
    );
  }

  deleteTask(todo: ToDo): Observable<null> {
    const url = `${this.tasksUrl}/${todo.id}`;
    return this.http.delete<null>(
      url
    );
  }

  updateTask(todo: ToDo): Observable<TaskResponse> {
    const url = `${this.tasksUrl}/${todo.id}`;
    const body = { completed : todo.completed };
    return this.http.patch<TaskResponse>(
      url,
      body
    );
  } 
}
