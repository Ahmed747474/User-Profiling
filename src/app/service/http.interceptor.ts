import { Injectable } from '@angular/core';
 import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HTTP_INTERCEPTORS
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
 
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  
     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
 
                }
                return event;
            }),
          );
    }
}

export const HttpConfigInterceptors = {
     provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true
};


