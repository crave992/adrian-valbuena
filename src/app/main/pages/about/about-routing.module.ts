import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePageComponent } from 'src/app/_shared/layouts/single-page/single-page.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: SinglePageComponent,
    children: [
      {
        path:'',
        component: AboutComponent,
        data: {
          title: 'About Us',
          description: 'Learn about our company and mission',
          keywords: 'about adrian, adrian mission, adrian vision'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
