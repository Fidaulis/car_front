import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UsersService} from "../service/users.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private usersService: UsersService,
  ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.usersService.loggedIn()) {
      return true;
    }
    if (this.usersService.loggedIn()) {
      localStorage.removeItem('token');
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }

}
