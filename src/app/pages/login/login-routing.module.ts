import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login.component";
import {RouteGuard} from "../../Utils/guard/route.guard";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [RouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
