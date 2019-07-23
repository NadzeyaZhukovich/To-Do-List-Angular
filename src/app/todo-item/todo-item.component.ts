import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../model/toDo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class ToDoItemComponent {

  @Input() todo: ToDo;
  @Output() deleteEmitter = new EventEmitter<ToDo>();
  @Output() updateEmitter = new EventEmitter<ToDo>();

  changedCompleteStatus(){
    this.updateEmitter.emit(this.todo);
  }

  constructor() {
  }

  deleteTaskBtn() {
    this.deleteEmitter.emit(this.todo);
  }
}
