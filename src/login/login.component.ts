import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
  <main>
    <h2>Enter your credentials</h2>
    <form #authForm="ngForm" (ngSubmit)="onSubmit(authForm)" novalidate>
      <input type="text" placeholder="Login" name="login" ngModel required />
      <input type="text" placeholder="Password" name="password" ngModel required />
      <button class="submitButton" type="submit" [disabled]="!authForm.valid">Submit</button>
    </form>
    <button type="button" (click)="onSwitchMode()">Switch mode to {{isLoginMode ? 'Log in' : 'Sign in'}}</button>
    <button type="button">{{isLoginMode ? 'Sign in' : 'Log in'}}</button>
  </main>
  `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoginMode=false;
  public onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    } else {
      console.log('Form is invalid');
    }
  }
  onSwitchMode()
  {
    this.isLoginMode=!this.isLoginMode;
    }
}
