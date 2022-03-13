import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import  * as paths from './data/constant';
import { AboutMeViewComponent } from './views/about-me-view/about-me-view.component';
import { BlogViewComponent } from './views/blog-view/blog-view.component';

const routes: Routes = [
  { path: paths.aboutMePath , component: AboutMeViewComponent },
  { path: paths.blogPath , component: BlogViewComponent },
  { path: '',   redirectTo: `/${paths.aboutMePath}`, pathMatch: 'full' }
];

const extraOption: ExtraOptions = {
  anchorScrolling: 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOption)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
