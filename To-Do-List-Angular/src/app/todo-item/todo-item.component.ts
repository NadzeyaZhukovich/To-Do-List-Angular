import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../model/ToDo';
import { Label } from '../model/Label';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class ToDoItemComponent implements OnInit {
  private _todo;

  @Input() todo: ToDo;
  @Output() deleteEmitter = new EventEmitter<String>();
  @Output() updateEmitter = new EventEmitter<ToDo>();

  changedCompleteStatus(event){
    if(event) {
      this.updateEmitter.emit(this.todo);
    }
  }

  constructor() {
  }

  deleteTaskBtn() {
    this.deleteEmitter.emit(this.todo.id);
  }

  ngOnInit() {
  }
}
