import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './todo-list/todo-list.component';
import { ToDoItemComponent } from './todo-item/todo-item.component';
import { AddToDoComponent } from './add-todo/add-todo.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, CanActivate} from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { LocalStorageService } from './local-storage.service';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login',component: LoginComponent,
  children: [
    {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
    {path: 'sign-in', component: SignInComponent},
    {path: 'create-account', component: CreateAccountComponent},
  ]
  },
  {path: 'tasks', component: TasksComponent, canActivate: [AuthGuardService]}
]

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent,
    AddToDoComponent,
    CreateAccountComponent,
    SignInComponent,
    TasksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, AuthService, LocalStorageService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
