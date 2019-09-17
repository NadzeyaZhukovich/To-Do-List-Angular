import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../model/toDo';
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

  deleteTask(todo: ToDo) {
    console.log('delete:', todo);
    this.dataService.deleteTask(todo)
      .subscribe(
        _ => this.toDoLists = this.deleteTodoFromArray(this.toDoLists, todo),
        error => this.handleError(error)
      )
  }

  updateTask(todo: ToDo) {
    this.dataService.updateTask(todo)
    .subscribe(
        {
          error: this.handleError
        }
      );
  }

  fetchToDo() {
    this.dataService.getTasks() 
      .subscribe( 
        taskResponse => 
          this.toDoLists = taskResponse.data.tasks,
          error =>this.handleError(error)
      );
  }

  ngOnInit() {
    this.fetchToDo();
  }

  private handleError(error) {
    console.log(error);
  } 
  
  private deleteTodoFromArray(array: ToDo[], todo: ToDo) : ToDo[] {
    return array.filter(e => e.id !== todo.id);
  }
}
