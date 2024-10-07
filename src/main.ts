import { Component } from '@angular/core';
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { provideRouter, RouterModule } from '@angular/router';
import routeConfig from './routes/routes.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './login/auth-interceptor.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  template: `<app-header/>
  <hr/>
  <router-outlet/>`,
})
export class App {}

bootstrapApplication(App, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig),provideHttpClient(withInterceptors([authInterceptor]))],
}).catch((err) => console.error(err));
