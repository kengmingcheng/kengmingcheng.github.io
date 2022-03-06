import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutMeViewComponent } from './views/about-me-view/about-me-view.component';
import { aboutMePath } from './data/constant';

const routes: Routes = [
  {path: aboutMePath , component: AboutMeViewComponent}
];

const extraOption: ExtraOptions = {
  anchorScrolling: 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOption)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
