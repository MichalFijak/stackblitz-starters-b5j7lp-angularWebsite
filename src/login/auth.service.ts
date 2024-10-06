import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

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
       return this.http.post<AuthResponseData>
       ('some sign up endpoint url',
       {
        email:email,
        password:password,
        returnSecureToken:true
        }
        ).pipe(
            catchError(errorRes=>{
            let errorMessage="Some error occured!"
            // error based on firebase
            if(errorRes.error.error.message)
            {
                return throwError(errorMessage);
            }
            return throwError(errorRes)
        }
        ))
        
    }
    login(email:string,password:string)
    {
        console.log('Logged in!')
        // it will throw 404 untill correct url is provided
        return this.http.post<AuthResponseData>('some login endpoint url',{email:email,password:password, returnSecureToken:true})
    }
}

