import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../model/ToDo';
import { Label } from '../model/Label';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class ToDoItemComponent implements OnInit {

  @Input() todo: ToDo;
  @Output() deleteEmitter = new EventEmitter<String>();

  completed: boolean = false;
  isChecked: boolean = false;

  changedStatus(event){
    if(event) {
      this.completed = !this.completed;
    }
  }

  constructor() {
  }

  deleteTaskBtn() {
    this.deleteEmitter.emit(this.todo.id);
  }

  ngOnInit() {
    this.changedStatus(this.isChecked);
  }
}
