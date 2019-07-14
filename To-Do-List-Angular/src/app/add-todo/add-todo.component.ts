import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as nanoid from 'nanoid';
import { ToDo } from '../model/ToDo';
import { Label } from '../model/Label';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddToDoComponent implements OnInit {

  private _labelList: Array<Label> = new Array<Label>();
  
  toDo: ToDo = new ToDo(nanoid(), '', null);

  @Output() addEmitter = new EventEmitter<ToDo>();
  
  get labelList() {
    return this._labelList;
  }

  @Input() 
  set labelList(labels: Array<Label>) {
    this._labelList = labels;
    this.toDo.label = this._labelList.length > 0 ? this._labelList[0] : null;
  }
  
  constructor() { }

  addTaskBtn() {
    this.addEmitter.emit(this.toDo); 
    this.cleanToDo();
  }

  onLabelChanged(value: string) {
    return this.toDo.label = this.findLabelByTitle(value, this.labelList);
  }

  ngOnInit() {
  }

  private findLabelByTitle(labelTitle: string, labelList: Array<Label>){
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
    const previousLabel: Label = this.toDo.label;
    this.toDo = new ToDo(nanoid(), '', previousLabel);
  }
}
