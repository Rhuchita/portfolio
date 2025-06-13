import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillComponent } from './components/skill/skill.component';
import { ScrollRevealDirective } from './shared/directives/scroll-reveal.directive';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    ProjectComponent,
    SkillComponent,
    ScrollRevealDirective
  ],
  providers: [],
  bootstrap: [ ]
})
export class AppModule { }



