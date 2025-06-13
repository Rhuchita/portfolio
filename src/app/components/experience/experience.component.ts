import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  position: string;
  company: string;
  location?: string;
  startDate: string; // formatted like 'Jan 2022'
  endDate: string; // formatted like 'Present' or 'Jun 2023'
  description: string;
  technologies?: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
    position: 'Software Engineer I',
    company: 'SLB (Schlumberger)',
    location: 'Pune, India',
    startDate: 'Aug 2023',
    endDate: 'Present',
    description: `Developed cloud-native web apps and automated enterprise workflows using ReactJS, Python, and Power Platform.
Collaborated with Agile teams to build, test, and deploy production-grade applications using Azure DevOps.`,
    technologies: ['ReactJS', 'TypeScript', 'Azure DevOps', 'Python', 'Power Platform']
  },
  {
    position: 'RPA Development Intern',
    company: 'Schlumberger',
    location: 'Pune, India',
    startDate: 'May 2022',
    endDate: 'Aug 2022',
    description: `Built end-to-end automation workflows using Power Automate and Automation Anywhere,
streamlining HR onboarding and invoice verification processes.`,
    technologies: ['Power Automate', 'Power Apps', 'Automation Anywhere']
  },
  {
    position: 'Web Development Intern',
    company: 'Bleam Technologies',
    location: 'Remote',
    startDate: 'Aug 2021',
    endDate: 'Nov 2021',
    description: 'Built and deployed web platforms including survey and bidding tools using Flask and Django frameworks.',
    technologies: ['Django', 'Flask', 'HTML5', 'CSS3', 'JavaScript']
  }
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
