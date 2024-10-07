import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthResponseData, AuthServce } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
      <button type="submit" [disabled]="!authForm.valid">{{isLoginMode ? 'Sign in' : 'Log in'}}</button>
    </form>
    <button type="button" (click)="onSwitchMode()">Switch mode to {{isLoginMode ? 'Log in' : 'Sign in'}}</button>
  </main>
  `,
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode=false;
  private error!: string;
  
  constructor(private authService:AuthServce, private router:Router){}
  

  public onSubmit(form: NgForm) {
    let authObservable: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObservable= this.authService.signup(form.value.email,form.value.password);
    }
    else{
      authObservable=  this.authService.login(form.value.email,form.value.password);
    }
  
    authObservable.subscribe(data=>{
      console.log(data)
      this.router.navigate(['/']);
    },errorMessage=>{
      console.log(errorMessage);
      this.error=errorMessage;
    })
  

    form.reset();
  
  }

  onSwitchMode()
  {
    this.isLoginMode=!this.isLoginMode;
  }
}
