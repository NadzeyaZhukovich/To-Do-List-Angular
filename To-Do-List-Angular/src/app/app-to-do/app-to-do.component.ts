import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-app-to-do',
  templateUrl: './app-to-do.component.html',
  styleUrls: ['./app-to-do.component.scss']
})
export class AppToDoComponent implements OnInit {

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
