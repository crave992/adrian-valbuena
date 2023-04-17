import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SinglePageComponent } from 'src/app/_shared/layouts/single-page/single-page.component';

const routes: Routes = [
  {
    path: '',
    component: SinglePageComponent,
    children: [
      {
        path:'',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
