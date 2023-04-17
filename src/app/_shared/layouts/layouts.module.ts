import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './templates/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { SinglePageComponent } from './single-page/single-page.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavigationComponent,
    SinglePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class LayoutsModule { }
