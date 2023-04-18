import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './templates/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { SinglePageComponent } from './single-page/single-page.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './templates/footer/footer.component';
import { BannerComponent } from './templates/banner/banner.component';



@NgModule({
  declarations: [
    NavigationComponent,
    SinglePageComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    BannerComponent
  ]
})
export class LayoutsModule { }
