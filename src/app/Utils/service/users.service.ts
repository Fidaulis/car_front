import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {urlList} from "../api/urlList";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  /**
   * Service to logg in Admin
   */
  public login(user: any) {
    return this.httpClient.post(urlList.path_login, user);
  }

  public loggedIn() {
    return !!localStorage.getItem('token');
  }

  public getToken() {
    return localStorage.getItem('token');
  }


  public logout() {
    return localStorage.removeItem('token');
    this.router.navigate(['/client/car']);
  }

}
