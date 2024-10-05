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
      <button type="submit" [disabled]="!authForm.valid">Submit</button>
    </form>
  </main>
  `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  public onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
