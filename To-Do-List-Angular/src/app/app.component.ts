import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-Do-List-Angular';

  @Input() toDoLists = ['Task1', 'Task2', 'Task3', 'Task4',];

  addTask(value: string) {
    this.toDoLists.push(value);
  }
}
