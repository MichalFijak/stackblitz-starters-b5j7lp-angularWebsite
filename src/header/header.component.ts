import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthServce } from '../login/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSubscription!: Subscription;
  protected isAuthenticated=false;
  constructor(private authService:AuthServce){
  }


  ngOnInit() {
    this.userSubscription=this.authService.user.subscribe(user=>{
      console.log(user);
      this.isAuthenticated =!user? false:true;
    });
}

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
}
}