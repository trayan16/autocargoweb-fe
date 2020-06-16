import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';

const BASE_PATH = 'http://admin.autocargoweb.com';
@Injectable()
export class InterceptorsService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const proxyReq = req.clone({ url: `${BASE_PATH}${req.url}`});
    return next.handle(proxyReq);
  }
}