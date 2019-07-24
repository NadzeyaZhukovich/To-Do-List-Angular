import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Response } from '../model/response';
import { FormBuilder } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form = this.fb.group({
    username: [''],
    password: ['']
  }); 
  
  constructor(private router: Router,
              private authService: AuthService,
              private fb: FormBuilder) { }

  ngOnInit() {
  }

  singInClick() {
    this.authService.signIn(this.form.value as User)
      .subscribe(
        response => this.handelSignInResponse(response),
        error => console.log(error)
      )
  }

  createAccountClick() {
    this.router.navigateByUrl('/login/create-account');
  }

  private handelSignInResponse(response: Response) {
    if (response.statusCode === 201) {
      this.router.navigateByUrl('/tasks');
    }
  }
}
