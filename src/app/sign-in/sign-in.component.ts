import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Response } from '../model/response';
import { FormBuilder } from '@angular/forms';
import { User } from '../model/user';
import { LocalStorageService } from '../local-storage.service';

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
              private fb: FormBuilder,
              private localStorageService: LocalStorageService) { }

  ngOnInit() { }

  singInClick() {
    this.authService.signIn(this.form.value as User)
      .subscribe(
        response => this.handleSignInResponse(response),
        error => console.log(error)
      );
  }

  createAccountClick() {
    this.router.navigateByUrl('/login/create-account');
  }

  private handleSignInResponse(response: Response) {
    this.localStorageService.set('session_id', response.data.session_id);
    this.localStorageService.set('access_token', response.data.access_token);
    this.localStorageService.set('refresh_token', response.data.refresh_token);
    this.router.navigateByUrl('/tasks');
  }
}

