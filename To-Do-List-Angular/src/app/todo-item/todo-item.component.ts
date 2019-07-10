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

  constructor() {
  }

  deleteTaskBtn() {
    this.deleteEmitter.emit(this.todo.id);
  }

  ngOnInit() {
  }
}
