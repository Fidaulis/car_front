import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {UsersService} from "../users.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(
    private injector: Injector,
    private usersService: UsersService,
    private route: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.injector.get(UsersService);
    const token = authService.getToken();
    const helper = new JwtHelperService();
    if (token) {
      const isExpired = helper.isTokenExpired(token);
      if (isExpired) {
        this.route.navigate(['/login']);
      }

      const tokenIntercept = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`
        }
      });

      return next.handle(tokenIntercept).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 403) {
            localStorage.removeItem('token');
            this.route.navigate(['/login']);
          }
        }
        return event;
      }, error => {
        if (error.status === 403) {
          localStorage.removeItem('token');
          this.route.navigate(['/login']);
        }
        console.log(error);
      }));
    } else {
      if (!authService.getToken()) {
        return next.handle(req);
      }
    }
  }
}
