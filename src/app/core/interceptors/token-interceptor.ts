import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        let key: string = localStorage.getItem("token");

        request = request.clone({
            setHeaders: {
                Authorization: key || ""
            }
        });

        return next.handle(request);
    }
}
