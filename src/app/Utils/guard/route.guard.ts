import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UsersService} from "../service/users.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(
    private router: Router,
    private usersService: UsersService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const islogged = this.usersService.loggedIn();
    if (islogged === true) {
      this.router.navigate(['/client/car'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    } else {
      return true;
    }
  }

}
