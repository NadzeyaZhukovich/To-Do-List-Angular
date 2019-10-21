import { Component, OnInit } from '@angular/core';
import { ToDo } from '../model/toDo';
import { DataService } from '../data.service';
import { ManageDataService } from '../manage-data.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { filter, map, mergeMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks$: Observable<ToDo[]>;

  constructor(private dataService: DataService,
              private manageData: ManageDataService) { }

  ngOnInit() {
    this.fetchToDo();
  }


  addTask(todo: ToDo, ) {
    this.manageData.add(todo);
  }

  deleteTask(todo: ToDo) {
    this.manageData.delete(todo);

    // Do not delete :
    //
    // this.manageData.delete(todo).subscribe(() => {});
    // this.tasks$ = this.tasks$.pipe(map(todoList => todoList.filter((todo: ToDo) => todo.id !== todo.id)));
    // this.tasks$ = this.tasks$.pipe(mergeMap(list=>list), filter((todo: ToDo) => todo.id !== todo.id), toArray());
  }

  updateTask(todo: ToDo) {
    this.manageData.update(todo);
  }

  fetchToDo() {
    this.tasks$ = this.manageData.tasks$;
  }
}
