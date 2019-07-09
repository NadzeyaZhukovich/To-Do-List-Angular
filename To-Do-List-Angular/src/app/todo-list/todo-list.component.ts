import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @Input() toDoList;
  
  constructor() { }

  deleteItem(value: String) {
    const index = this.toDoList.indexOf(value);
    if (index > -1) {
      this.toDoList.splice(index, 1);
    }
  }

  ngOnInit() {
  }

}
