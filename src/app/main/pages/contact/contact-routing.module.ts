import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePageComponent } from 'src/app/_shared/layouts/single-page/single-page.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '',
    component: SinglePageComponent,
    children: [
      {
        path:'',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
