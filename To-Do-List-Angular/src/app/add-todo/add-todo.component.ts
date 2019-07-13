import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import * as nanoid from 'nanoid';
import { ToDo } from '../model/ToDo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddToDoComponent implements OnInit {

  labels = ['Select status','Work', 'Home', 'Hobby'];
  @Output() addEmitter = new EventEmitter<ToDo>();
  
  toDo = new ToDo(nanoid(), '', '');

  constructor() { }

  addTaskBtn() {
    this.addEmitter.emit(this.toDo); 
    this.cleanToDo();
  }

  onChange(selectedValue) {
    return this.toDo.label = selectedValue;
  }

  ngOnInit() {
  }

  cleanToDo() {
    this.toDo = new ToDo(nanoid(), '', '');
  }

}
