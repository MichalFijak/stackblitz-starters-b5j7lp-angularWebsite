import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ShopComponent } from '../shop/shop.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { AuthComponent } from '../login/auth.component';
import { AuthGuard } from '../login/auth.guard';

const routeConfig: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'shop', component: ShopComponent, title: 'Shop Page',canActivate:[AuthGuard] },
  { path: 'about-us', component: AboutUsComponent, title: 'About Us' },
  { path: 'login', component: AuthComponent, title: 'Login' },
];

export default routeConfig;
