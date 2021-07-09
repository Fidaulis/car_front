import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { ClientComponent } from './client.component';
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CoreModule,
    SharedModule.forRoot()
  ]
})
export class ClientModule { }
