import { Component, OnInit, Input } from '@angular/core';
import { ToDo2 } from '../model/toDo2';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private dataService: DataService) {  }

  toDoLists: ToDo2[] = [];

  addTask(todo: ToDo2) {
    this.dataService.addTask(todo)
      .subscribe(
        data => {
          if(data.success) {
            this.toDoLists.push(data.data.tasks[0])
          } else {
            console.log('error:', data.messages);
          }
        },
        error => this.handleError(error)
      )
  }

  ngOnInit() {
    console.log('init');
    this.fetchToDo2();
  }

  fetchToDo2() {
    this.dataService.getTasks() 
      .subscribe( 
        taskResponse => {
          console.log(taskResponse.data);
          this.toDoLists = taskResponse.data.tasks;
        },
        error =>this.handleError(error)
      );
  }

  private handleError(error) {
    console.log(error);
  }  
}
