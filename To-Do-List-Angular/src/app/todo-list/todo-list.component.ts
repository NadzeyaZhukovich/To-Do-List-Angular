import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../model/ToDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  @Input() toDoList: Array<ToDo>;
  
  constructor() { }

  deleteItem(id: String) {
    fetch('http://localhost:3000/todos'+ '/' + id, {method: 'DELETE'})
      .then((response) => {
        if(response.status === 200) {
          let index = -1;
          for (let i = 0; i < this.toDoList.length; i++) {
            if (this.toDoList[i].id === id) {
              index = i;
            }
          }
          
          if (index > -1) {
            this.toDoList.splice(index, 1);
          }
        }
      })
  }

  ngOnInit() {
  }

}
