import { Label } from './Label';

export class ToDo {
    id: String;
    task: String;
    label: Label;
    isCompleted: Boolean;

    constructor(id: String, task: String, label: Label, isCompleted: Boolean) {
        this.id = id;
        this.task = task;
        this.label = label;
        this.isCompleted = isCompleted;
    }
}