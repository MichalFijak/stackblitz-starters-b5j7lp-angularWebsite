import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
  <main>
    <h2>Enter your credentials</h2>
    <input type="text" placeholder="Login" [(ngModel)]="login" />
    <input type="text" placeholder="Password" [(ngModel)]="password"/>
    <button (click)="onSubmit()">Submit</button>
  </main>
`,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public login: string = '';
  public password: string = '';

  public onSubmit() {
    console.log(this.login, this.password);
  }
}
