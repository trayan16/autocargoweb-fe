import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;
        //if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2F1dG9jYXJnb3dlYiIsImlhdCI6MTU5MTAzMTcyMSwibmJmIjoxNTkxMDMxNzIxLCJleHAiOjE1OTE2MzY1MjEsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.Oz5ST8Jcuia9eqqubgjfmFDjEus-NPTUz_AP6PPsQMs`,
                }
            });
        //}

        return next.handle(request);
    }
}