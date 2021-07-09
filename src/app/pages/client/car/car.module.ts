import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { ListComponent } from './list/list.component';
import {SharedModule} from "../../../shared/shared.module";
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule.forRoot()
  ]
})
export class CarModule { }
