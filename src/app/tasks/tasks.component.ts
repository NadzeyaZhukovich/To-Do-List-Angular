import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../model/ToDo';
import { DataService } from '../data.service'; 

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private dataService: DataService) {  }

  toDoLists: ToDo[] = [];

  addTask(todo: ToDo) {
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
    this.fetchToDo();
  }

  fetchToDo() {
    this.dataService.getTasks() 
      .subscribe( 
        taskResponse => 
          this.toDoLists = taskResponse.data.tasks,
          error =>this.handleError(error)
      );
  }

  private handleError(error) {
    console.log(error);
  }  
}
