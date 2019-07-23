import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  singInClick() {
    console.log('hello!');
    this.router.navigateByUrl('/login/sign-in');
  }

  createAccountClick() {
    console.log('world');
    this.router.navigateByUrl('/login/create-account');
  }
}
