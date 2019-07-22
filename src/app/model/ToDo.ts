import { Label } from './label';

export interface ToDo {
    id: string;
    task: string;
    label: Label;
    isCompleted: boolean;
}
