import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../model/toDo';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent {

  @Input() toDoList: ToDo[];
  @Output() deleteItem = new EventEmitter<ToDo>();
  @Output() changeItem = new EventEmitter<ToDo>();
}
