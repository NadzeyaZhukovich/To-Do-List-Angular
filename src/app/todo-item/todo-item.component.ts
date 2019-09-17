import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo2 } from '../model/toDo2';

@Component({
  selector: 'app-todo-item', 
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class ToDoItemComponent {

  @Input() todo: ToDo2;
  @Output() deleteEmitter = new EventEmitter<ToDo2>();
  @Output() updateEmitter = new EventEmitter<ToDo2>();

  changedCompleteStatus(){
    this.updateEmitter.emit(this.todo);
  }

  constructor() {
    console.log(this.todo)
  }

  deleteTaskBtn() {
    this.deleteEmitter.emit(this.todo);
  }
}
