import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePageComponent } from 'src/app/_shared/layouts/single-page/single-page.component';
import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: SinglePageComponent,
    children: [
      {
        path:'',
        component: PortfolioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
