import { ToDo } from './toDo';

export interface Response {
   statusCode: number;
   success: boolean;
   messages: string[];
   data: Data; 
}

export interface TaskResponse {
   statusCode: number;
   success: boolean;
   messages: string[];
   data: TaskData; 
}

export interface TaskData {
   row_returned: number,
   tasks: ToDo[];
}

interface Data {
   session_id: number;
   access_token: string;
   access_token_expires_in: number;
   refresh_token: string;
   refresh_token_expires_in: number;
}