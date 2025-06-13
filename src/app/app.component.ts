import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { SkillComponent } from "./components/skill/skill.component";
import { ProjectComponent } from "./components/project/project.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CommonModule, isPlatformBrowser, ViewportScroller } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AboutComponent, SkillComponent, ProjectComponent, ExperienceComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fullstack Developer Portfolio';
  isBrowser: boolean;
  navLinks = [
    { label: 'About', sectionId: 'about' },
    { label: 'Skills', sectionId: 'skill' },
    { label: 'Projects', sectionId: 'project' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Contact', sectionId: 'contact' }
  ];
  // Currently active section for nav highlight
  activeSection: string = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private viewportScroller: ViewportScroller
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  @HostListener('window:scroll', [])
  updateActiveSectionOnScroll(): void {
    if (!this.isBrowser) return;
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    for (const link of this.navLinks) {
      const el = document.getElementById(link.sectionId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = link.sectionId;
          return;
        }
      }
    }
    this.activeSection = '';
  }
  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    if (!this.isBrowser) return;
    this.viewportScroller.scrollToAnchor(sectionId);
    this.activeSection = sectionId;
  }
}
