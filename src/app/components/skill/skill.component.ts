import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  proficiency: number; // Percentage 0-100
  category: string;
  icon?: string; // Icon name or URL, could use material icons or SVGs
}

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  skills: Skill[] = [
    { name: 'TypeScript', proficiency: 85, category: 'Frontend', icon: 'code' },
  { name: 'ReactJS', proficiency: 80, category: 'Frontend', icon: 'integration_instructions' },
  { name: 'Python', proficiency: 85, category: 'Backend', icon: 'storage' },
  { name: 'Flask', proficiency: 70, category: 'Backend', icon: 'settings_ethernet' },
  { name: 'Django', proficiency: 70, category: 'Backend', icon: 'settings_ethernet' },
  { name: 'SQL', proficiency: 75, category: 'Database', icon: 'table_chart' },
  { name: 'Azure DevOps', proficiency: 70, category: 'DevOps', icon: 'cloud' },
  { name: 'Power Platform', proficiency: 70, category: 'Automation', icon: 'developer_board' },
  { name: 'Git', proficiency: 80, category: 'Tools', icon: 'merge_type' }
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
