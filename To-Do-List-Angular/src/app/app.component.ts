import { Component, Input } from '@angular/core';
import * as nanoid from 'nanoid';
import { ToDo } from './model/ToDo';
import { ToDoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-Do-List-Angular';
  TODOS_URL = 'http://localhost:3000/todos';
  LABELS_URL = 'http://localhost:3000/labels';
 
  @Input() toDoLists = [];
  @Input() labelList = [];

  addTask(todo: ToDo) {
    this.insertToDoOnServer(this.TODOS_URL, todo);
  }

  fetchTodos(url) {
    fetch(url)
      .then((response) => response.json())
      .then((todos) => this.toDoLists = todos);    
  }

  fetchLabels(url) {
    fetch(url)
      .then((response) => response.json())
      .then((labels) => {
        this.labelList = labels;
        console.log(this.labelList);
      });    
  }

  insertToDoOnServer(url, todo: ToDo){
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo)
    })
    .then((response) => {
      if (response.status === 201) {
        this.toDoLists.push(todo);
      }
    });
  }

  ngOnInit() {
    this.fetchTodos(this.TODOS_URL);
    this.fetchLabels(this.LABELS_URL);
  }
}
