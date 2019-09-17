import { Component, Input, Output, EventEmitter} from '@angular/core';
import * as nanoid from 'nanoid';
import { ToDo2 } from '../model/toDo2';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddToDoComponent {
  task: string;
  
  @Output() addEmitter = new EventEmitter<ToDo2>();
  
  constructor(private router: Router,
              private localStorageService: LocalStorageService,
              private auth: AuthService) { }

  addTaskBtn() {
    const todo = {
      id: nanoid(),
      title: this.task,
      completed: 'N'} as ToDo2;

      this.addEmitter.emit(todo);
  
      this.cleanToDo(); 
  }

  logOutBtn() {
    this.auth.logOut()
      .subscribe(
        _ => {
          this.localStorageService.clear();
          this.router.navigateByUrl('/login/sign-in');
        },
        error => console.log(error)
      )
  }

  private cleanToDo() {
    this.task = '';
  }
}
