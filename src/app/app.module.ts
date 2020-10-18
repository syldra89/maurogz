import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { routing, appRoutingProviders} from './app.routing';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule} from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { WebDevelopmentComponent } from './components/web-development/web-development.component';
import { AppDevelopmentComponent } from './components/app-development/app-development.component';
import { CoursesComponent } from './components/courses/courses.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    WebDevelopmentComponent,
    AppDevelopmentComponent,
    CoursesComponent,
    BannerComponent,
    ServicesComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
  	appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
