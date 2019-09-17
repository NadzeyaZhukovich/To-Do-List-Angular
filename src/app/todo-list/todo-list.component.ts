import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../model/ToDo';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent {

  @Input() toDoList: ToDo[];
  
  constructor(private dataService: DataService) { }

  deleteTask(todo: ToDo) {
    this.dataService.deleteTask(todo)
      .subscribe(
        _ => this.toDoList = this.deleteTodoFromArray(this.toDoList, todo),
        error => this.handleError(error)
      )
  }

  updateTask(todo: ToDo) {
    if(todo.completed === 'Y') {
      todo.completed = 'N';
    } else {
      todo.completed = 'Y';
    }
    this.dataService.updateTask(todo)
    .subscribe(
        {
          error: this.handleError
        }
      );
  }

  private deleteTodoFromArray(array: ToDo[], todo: ToDo) : ToDo[] {
    return array.filter(e => e.id !== todo.id);
  }

  private handleError(error) {
    console.log(error);
  }
}
