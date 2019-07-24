import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Response } from '../model/response';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

form = this.fb.group({
    fullname: [''],
    username: [''],
    password: ['']
  }); 

  constructor(private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) { }

  singInClick() {
    this.router.navigateByUrl('/login/sign-in');
  }

  createAccountClick() {
    this.authService.createAccount(this.form.value as User)
      .subscribe(
        response => this.handleCreateAccountSuccessResponse(response),
        error => console.log(error)
      );
     console.log(this.form.value);
  }

  ngOnInit() {
  }

  private handleCreateAccountSuccessResponse(response: Response) {
    if (response.statusCode === 201) {
      alert("User created, please Sign In.");
      this.router.navigateByUrl('/login/sign-in');
    }
  }
}
