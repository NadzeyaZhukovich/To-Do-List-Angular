import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddToDoComponent implements OnInit {

  @Output() addEmitter = new EventEmitter<String>();
  taskTitle: string = '';

  constructor() { }

  addTaskBtn() {
    this.addEmitter.emit(this.taskTitle); 
    this.taskTitle = ''; 
  }

  ngOnInit() {
  }

}
