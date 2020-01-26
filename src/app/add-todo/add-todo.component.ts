import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ToDo } from '../model/ToDo';
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
  @Output() addEmitter = new EventEmitter<ToDo>();
  constructor(private router: Router,
              private localStorageService: LocalStorageService,
              private auth: AuthService) { }

  addTaskBtn() {
    const todo = {
      title: this.task,
      completed: 'N'} as ToDo;

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
      );
  }

  private cleanToDo() {
    this.task = '';
  }
}
