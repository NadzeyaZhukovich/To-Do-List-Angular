import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../model/toDo';
import { DataService } from '../data.service';
import { element } from 'protractor';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent {

  @Input() toDoList: ToDo[];
  
  constructor(private dataService: DataService) { }

  deleteToDo(todo: ToDo) {
    this.dataService.deleteToDo(todo)
      .subscribe(
        // _ => this.deleteTodoFromArray(this.toDoList, todo),
        _ => this.toDoList = this.toDoList.filter(e => e.id !== todo.id),
        error => this.handleError(error)
      )
  }

  updateToDo(todo: ToDo) {
    this.dataService.updateToDo(todo)
    // ???????????
    .subscribe(
        {
          error: this.handleError
        }
      );
  }
  
  private deleteTodoFromArray(array: ToDo[], todo: ToDo) {
    // let index = -1;
    // for (let i = 0; i < array.length; i++) {
    //   if (array[i].id === todo.id) {
    //     index = i;
    //   }
    // }
    
    // if (index > -1) {
    //   array.splice(index, 1);
    // }
    
    //  array = array.filter(e => e.id !== todo.id);
  } 

  private handleError(error) {
    console.log(error);
  }
}
