import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './layouts/layouts.module';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    LayoutsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
