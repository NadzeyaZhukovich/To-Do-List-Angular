import { Component, Input } from '@angular/core';
import { ToDo } from './model/ToDo';
import { Label } from './model/Label';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notes';

  constructor(private dataService: DataService) {  }

  @Input() toDoLists: Array<ToDo> = new Array<ToDo>();
  @Input() labelList: Array<Label> = new Array<Label>();

  addTask(todo: ToDo) {
    this.dataService.addToDo(todo)
      .subscribe(
        data => this.toDoLists.push(data),
        error => this.handleError(error)
      )
  }

  ngOnInit() {
    this.fetchToDos();
    this.fetchLabels();
  }

  private fetchToDos() {
    this.dataService.getToDos()
    .subscribe(
      data => this.toDoLists = data,
      error => this.handleError(error)
    );
  }

  private fetchLabels() {
    this.dataService.getLabels()
    .subscribe(
      labels => this.labelList = labels,
      error => this.handleError(error)
    );
  }

  private handleError(error) {
    console.log(error);
  }
}
