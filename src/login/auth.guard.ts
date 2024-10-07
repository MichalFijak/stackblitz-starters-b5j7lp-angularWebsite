import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AuthServce } from "./auth.service";
import { map } from "rxjs";

@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate{
    
    constructor(private authService:AuthServce){

    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return this.authService.user.pipe(map(user=>{
            return !!user;
        }));
    }

}