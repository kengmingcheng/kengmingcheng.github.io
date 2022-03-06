import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SkillComponent } from './components/skill/skill.component';
import { ExpComponent } from './components/exp/exp.component';
import { AboutMeViewComponent } from './views/about-me-view/about-me-view.component';
import { CareerComponent } from './components/career/career.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogViewComponent } from './views/blog-view/blog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SkillComponent,
    ExpComponent,
    AboutMeViewComponent,
    CareerComponent,
    EducationComponent,
    FooterComponent,
    BlogViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
