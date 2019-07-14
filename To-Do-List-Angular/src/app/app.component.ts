import { Component, Input } from '@angular/core';
import * as nanoid from 'nanoid';
import { ToDo } from './model/ToDo';
import { ToDoItemComponent } from './todo-item/todo-item.component';
import { Label } from './model/Label';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-Do-List-Angular';
  TODOS_URL = 'http://localhost:3000/todos';
  LABELS_URL = 'http://localhost:3000/labels';
 
  @Input() toDoLists: Array<ToDo> = new Array<ToDo>();
  @Input() labelList: Array<Label> = new Array<Label>();

  addTask(todo: ToDo) {
    this.insertToDoOnServer(this.TODOS_URL, todo);
  }

  fetchTodos(url: string) {
    fetch(url)
      .then((response) => response.json())
      .then((todos) => this.toDoLists = todos);    
  }

  fetchLabels(url: string) {
    fetch(url)
      .then((response) => response.json())
      .then((labels) => {
        this.labelList = labels;
      });    
  }

  insertToDoOnServer(url: string, todo: ToDo){
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
