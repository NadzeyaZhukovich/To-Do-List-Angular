import { Component, Input } from '@angular/core';
import * as nanoid from 'nanoid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-Do-List-Angular';
  TODOS_URL = 'http://localhost:3000/todos';
 
  @Input() toDoLists = [];

  addTask(value: string) {
    const todo = {
      "id": nanoid(),
      "task": value
    }
    this.insertToDoOnServer(this.TODOS_URL, todo)
  }

  fetchTodos(url) {
    fetch(url)
    .then((response) => response.json())
    .then((todos) => this.toDoLists = todos);
  }

  insertToDoOnServer(url, todo){
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
  }
}
