import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ShopComponent } from '../shop/shop.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { AuthComponent } from '../login/auth.component';
import { AuthGuard } from '../login/auth.guard';
const routeConfig: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'about-us', component: AboutUsComponent, title: 'About Us' },
  { path: 'login', component: AuthComponent, title: 'Login' },
  { path: 'shop', component: ShopComponent, title: 'Shop Page' /*,canActivate:[AuthGuard]*/ },
  { path: 'cart',
    loadComponent: ()=>
           import('../shop/cart-sneakpeak/cart-sneakpeak.component').then(m=>m.CartSneakpeakComponent),
           title:'cart'
  },
];

export default routeConfig;
