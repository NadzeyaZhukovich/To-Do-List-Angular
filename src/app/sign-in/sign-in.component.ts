import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Response } from '../model/response';
// import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @ViewChild('userName', {static: false}) userName: ElementRef;
  @ViewChild('password', {static: false}) password: ElementRef;
  
  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  singInClick() {
    const userName = this.userName.nativeElement.value;
    const password = this.password.nativeElement.value;
    this.authService.signIn(userName, password)
      .subscribe(
        response => this.handelSignInResponse(response),
        error => console.log(error)
      )
    // this.router.navigateByUrl('/tasks');
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

