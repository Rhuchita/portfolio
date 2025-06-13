import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  fullName = 'Rhuchita Shirude';
  profession = 'Software Engineer I';
  introText = `Full-stack developer with 1.5 years of experience building scalable cloud-integrated applications and internal automation tools.
Skilled in Python, TypeScript, ReactJS, Azure, and CI/CD practices. Passionate about solving real-world problems through clean, maintainable code and continuously improving development workflows. `;
  constructor() { }
  ngOnInit(): void {
  }
}
