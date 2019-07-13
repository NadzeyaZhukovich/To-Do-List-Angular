import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class ToDoItemComponent implements OnInit {

  @Input() todo;
  @Output() deleteEmitter = new EventEmitter<String>();

  visibleLabel = false;
  completed = false;
  isChecked;

  checkLabel(label){
    if(label) {
      this.visibleLabel = true;
    }
  }

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
    this.checkLabel(this.todo.label);
    this.changedStatus(this.isChecked);
  }
}
