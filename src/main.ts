import { Component } from '@angular/core';
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { provideRouter, RouterModule } from '@angular/router';
import routeConfig from './routes/routes.component';
import { provideHttpClient } from '@angular/common/http';

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
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig),provideHttpClient()],
}).catch((err) => console.error(err));
