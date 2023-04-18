import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    MaterialModule
  ],
  exports: [
    LayoutsModule,
    MaterialModule
  ]
})
export class SharedModule { }
