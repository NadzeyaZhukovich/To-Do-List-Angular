import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from './model/ToDo';
import { Label } from './model/Label';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseApiUrl = 'http://localhost:3000';
  todosApiService = `${this.baseApiUrl}/todos`;
  labelsApiService = `${this.baseApiUrl}/labels`;

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  httpOptions = { headers: this.headers }

  constructor(private http: HttpClient) { }

  getLabels(): Observable<Array<Label>> {
    return this.http.get<Array<Label>>(this.labelsApiService);
  }

  getToDos(): Observable<Array<ToDo>> {
    return this.http.get<Array<ToDo>>(this.todosApiService);
  }

  addToDo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.todosApiService, todo, this.httpOptions);
  }

  deleteToDo(todo: ToDo): Observable<null> {
    const url = `${this.todosApiService}/${todo.id}`;
    return this.http.delete<null>(url, this.httpOptions);
  }

  updateToDo(todo: ToDo) {
    const url = `${this.todosApiService}/${todo.id}`;
    return this.http.patch<ToDo>(url, todo, this.httpOptions);
  }
}
