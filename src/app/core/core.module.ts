import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {LoginRoutingModule} from "../pages/login/login-routing.module";



@NgModule({
    declarations: [NavbarComponent],
    exports: [
        NavbarComponent
    ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class CoreModule { }
