import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../Utils/service/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isConnected: boolean;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isConnected = this.usersService.loggedIn();
  }

  /**
   * logout
   */
  public logout() {
    this.usersService.logout();
    this.router.navigate(['/client/car']);
  }
}
