import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
},
{
    path: 'services',
    component: ServicesComponent
},
{
    path: 'blog',
    component: BlogComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
