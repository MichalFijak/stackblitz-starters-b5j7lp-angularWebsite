import { HttpRequest, HttpHandlerFn, HttpEvent, HttpParams, HttpInterceptorFn } from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { inject } from '@angular/core';
import { AuthServce } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    const authService = inject(AuthServce);
    return authService.user.pipe(
        take(1),
        exhaustMap(user => {
            const modifiedReq = req.clone({
                params: new HttpParams().set('auth', user.token!)
            });
            return next(modifiedReq);
        })
    );
};
