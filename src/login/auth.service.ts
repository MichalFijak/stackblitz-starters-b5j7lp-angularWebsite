import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";

export interface AuthResponseData{
    email:string,
    token:string,
    id:string,
    refreshToken:string,
    expiresIn:string,
    registered?:boolean;
}

@Injectable({providedIn:'root'})
export class AuthServce
{
    user = new Subject<User>();
    
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
            catchError(this.handleError),
             tap(resData=>{
                this.handleAuthentication(resData.email,resData.id, resData.token,+resData.expiresIn);
            }))
    }

    login(email:string,password:string)
    {
        // mocked data for 
        this.handleAuthentication(email,'someiD','validToken',new Date().getTime())

        console.log('Logged in!')
        // it will throw 404 untill correct url is provided
        return this.http.post<AuthResponseData>('some login endpoint url',{email:email,password:password, returnSecureToken:true})
    }

    private handleAuthentication(email:string,userId:string,token:string,expiresIn:number)
    {
        const expirationDate= new Date(new Date().getTime() + expiresIn * 1000)
        const user = new User(email,userId,token,expirationDate);
        this.user.next(user);
    }

    private handleError( errorRes: HttpErrorResponse)
    {
        
            let errorMessage="Some error occured!"
            // error based on firebase
            if(errorRes.error.error.message)
            {
                return throwError(errorMessage);
            }
            return throwError(errorRes)
    }
}

