import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './model/toDo';
import { Label } from './model/label';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseApiUrl = 'http://localhost:3000';
  todosApiService = `${this.baseApiUrl}/todos`;
  labelsApiService = `${this.baseApiUrl}/labels`;

  constructor(private http: HttpClient) { }

  getLabels(): Observable<Label[]> {
    return this.http.get<Label[]>(this.labelsApiService);
  }

  getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.todosApiService);
  }

  addToDo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.todosApiService, todo);
  }

  deleteToDo(todo: ToDo): Observable<null> {
    const url = `${this.todosApiService}/${todo.id}`;
    return this.http.delete<null>(url);
  }

  updateToDo(todo: ToDo) {
    const url = `${this.todosApiService}/${todo.id}`;
    return this.http.patch<ToDo>(url, todo);
  }
}
