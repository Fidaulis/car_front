import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {AuthGuard} from "./Utils/guard/auth.guard";
import {TokenInterceptorService} from "./Utils/service/http-interceptor/token-interceptor.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: false
    })
  ],
  providers: [
    AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
