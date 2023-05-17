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
        component: HomeComponent,
        data: {
          title: 'Home',
          description: 'Adrian Jairus Valbuena, the Web Developer',
          keywords: 'adrian, web developer, adrian web developer, valbuena web developer'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
