import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface AuthResponseData{
    email:string,
    token:string,
    refreshToken:string,
    expiresIn:string,
    registered?:boolean;
}

@Injectable({providedIn:'root'})
export class AuthServce
{
    
    constructor(private http:HttpClient){}
    signup(email:string,password:string)
    {
        console.log('Signed up!')
        // it will throw 404 untill correct url is provided
       return this.http.post<AuthResponseData>('some sign up endpoint url',{email:email,password:password, returnSecureToken:true});
        
    }
    login(email:string,password:string)
    {
        console.log('Logged in!')
        // it will throw 404 untill correct url is provided
        return this.http.post<AuthResponseData>('some login endpoint url',{email:email,password:password, returnSecureToken:true})
    }
}

