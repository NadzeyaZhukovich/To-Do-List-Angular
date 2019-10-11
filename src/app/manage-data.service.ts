import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ToDo } from './model/toDo';
import { map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, of, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {
  _tasks = new BehaviorSubject<ToDo[]>([]);
  tasks$ = this._tasks.asObservable()

  constructor(private dataService: DataService) {
    this.fetch();
  }

  add(todo: ToDo) {
    this.dataService.addTask(todo)
      .pipe(catchError(this.handleError))
      .subscribe(() => this.fetch())
  }

  delete(todo: ToDo) {
    return this.dataService.deleteTask(todo)
      .pipe(catchError(this.handleError))
      .subscribe(() => this.fetch());
  }

  update(todo: ToDo) {
    this.dataService.updateTask(todo)
      .pipe(catchError(this.handleError))
      .subscribe(() => this.fetch());
  }

  fetch() {
    this.dataService.getTasks()
      .pipe(catchError(this.handleError),
        map(response => response.data.tasks))
      .subscribe(tasks => this._tasks.next(tasks));
  }

  private handleError = (error: HttpErrorResponse) => {
    console.log(error);
    return throwError(error);
  }
}
