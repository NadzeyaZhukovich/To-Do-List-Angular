import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../model/ToDo';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent {

  @Input() toDoList: Array<ToDo>;
  
  constructor(private dataService: DataService) { }

  deleteToDo(todo: ToDo) {
    this.dataService.deleteToDo(todo)
      .subscribe(
        _ => this.deleteTodoFromArray(this.toDoList, todo),
        error => this.handleError(error)
      )
  }

  updateToDo(todo: ToDo) {
    this.dataService.updateToDo(todo)
      .subscribe(
        _ => { },
        error => this.handleError(error)
      )
  }
  
  private deleteTodoFromArray(array: Array<ToDo>, todo: ToDo) {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === todo.id) {
        index = i;
      }
    }
    
    if (index > -1) {
      array.splice(index, 1);
    }
  } 

  private handleError(error) {
    console.log(error);
  }
}
