import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
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
