import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {

  @Input() title;
  @Output() deleteEmitter = new EventEmitter<String>();

  constructor() {
  }

  deleteTaskBtn() {
    this.deleteEmitter.emit(this.title);
  }

  ngOnInit() {
  }
}
