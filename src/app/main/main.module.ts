import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../_shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
})
export class MainModule { }
