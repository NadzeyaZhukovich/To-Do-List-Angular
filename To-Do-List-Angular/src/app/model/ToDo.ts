import { Label } from './Label';

export class ToDo {
    id: String;
    task: String;
    label: Label;
    
    constructor(id: String, task: String, label: Label) {
        this.id = id;
        this.task = task;
        this.label = label;
    }
}