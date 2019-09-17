import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo2 } from '../model/toDo2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent {

  @Input() toDoList: ToDo2[];
  
  constructor(private dataService: DataService) { }

  deleteTask(todo: ToDo2) {
    this.dataService.deleteTask(todo)
      .subscribe(
        _ => this.toDoList = this.deleteTodoFromArray(this.toDoList, todo),
        error => this.handleError(error)
      )
  }

  updateTask(todo: ToDo2) {
    if(todo.completed === 'Y') {
      todo.completed = 'N';
    } else {
      todo.completed = 'Y';
    }
    console.log('patch', todo);
    this.dataService.updateTask(todo)
    .subscribe(
        {
          error: this.handleError
        }
      );
  }

  private deleteTodoFromArray(array: ToDo2[], todo: ToDo2) : ToDo2[] {
    return array.filter(e => e.id !== todo.id);
  }

  private handleError(error) {
    console.log(error);
  }
}
