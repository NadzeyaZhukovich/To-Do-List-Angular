import { Component, Input, Output, EventEmitter} from '@angular/core';
import * as nanoid from 'nanoid';
import { ToDo } from '../model/toDo';
import { Label } from '../model/label';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddToDoComponent {

  private _labelList: Label[] = [];

  label: Label;
  task: string;
  
  @Output() addEmitter = new EventEmitter<ToDo>();
  
  constructor(private router: Router) { }

  get labelList() {
    return this._labelList;
  }

  @Input() 
  set labelList(labels: Label[]) {
    this._labelList = labels;
    this.label = this._labelList[0];
  }

  addTaskBtn() {
    const todo = {
      id: nanoid(),
      task: this.task,
      label: this.label,
      isCompleted: false} as ToDo;
    this.addEmitter.emit(todo);

    this.cleanToDo();
    }
  
  onLabelChanged(value: string) {
    return this.label = this.findLabelByTitle(value, this.labelList);
  }

  logOutBtn() {
    this.router.navigateByUrl('/login/sign-in');
  }

  private findLabelByTitle(labelTitle: string, labelList: Label[]){
    let label = null;
    labelList.forEach(element => {
      if(labelTitle === element.title) {
        label = element;
        return label;
      }
    });
    return label;
  }

  private cleanToDo() {
    this.task = '';
  }

}
