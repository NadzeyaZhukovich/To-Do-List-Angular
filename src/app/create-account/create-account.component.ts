import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Response } from '../model/response';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  
  @ViewChild('fullName', {static: false}) fullName: ElementRef;
  @ViewChild('userName', {static: false}) userName: ElementRef;
  @ViewChild('password', {static: false}) password: ElementRef;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  singInClick() {
    this.router.navigateByUrl('/login/sign-in');
  }

  createAccountClick() {
    const fullName = this.fullName.nativeElement.value;
    const userName = this.userName.nativeElement.value;
    const password = this.password.nativeElement.value;

    this.authService.createAccount(fullName, userName, password)
      .subscribe(
        response => this.handleCreateAccountSuccessResponse(response),
        error => console.log(error)
      );
  }

  private handleCreateAccountSuccessResponse(response: Response) {
    if (response.statusCode === 201) {
      alert("User created, please Sign In.");
      this.router.navigateByUrl('/login/sign-in');
    } 
  }
}
