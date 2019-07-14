import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as nanoid from 'nanoid';
import { ToDo } from '../model/ToDo';
import { element } from 'protractor';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddToDoComponent implements OnInit {

  private _labelList;
  
  toDo = new ToDo(nanoid(), '', null);

  @Output() addEmitter = new EventEmitter<ToDo>();
  

  @Input() 
  set labelList(labels) {
    this._labelList = labels;
    this.toDo.label = this._labelList[0];
  }
  get labelList() {
    return this._labelList;
  }

  constructor() { }

  addTaskBtn() {
    this.addEmitter.emit(this.toDo); 
    this.cleanToDo();
  }

  findLabelByTitle(labelTitle, labelList){
    let label = null;
    labelList.forEach(element => {
      if(labelTitle === element.title) {
        label = element;
        return label;
      }
    });
    return label;
  }

  onChange(selectedValue) {
    return this.toDo.label = this.findLabelByTitle(selectedValue, this.labelList);
  }

  ngOnInit() {
  }

  cleanToDo() {
    this.toDo = new ToDo(nanoid(), '', '');
  }

}
