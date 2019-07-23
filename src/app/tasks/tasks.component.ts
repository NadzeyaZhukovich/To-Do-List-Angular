import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../model/toDo';
import { Label } from '../model/label';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private dataService: DataService) {  }

  @Input() toDoLists: ToDo[] = [];
  @Input() labelList: Label[] = [];

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
