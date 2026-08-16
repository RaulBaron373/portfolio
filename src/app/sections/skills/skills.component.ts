import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly skillGroups = [
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'HTML', 'SCSS']
    },
    {
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'REST API', 'JWT']
    },
    {
      title: 'Bases de datos',
      skills: ['MySQL', 'SQL']
    },
    {
      title: 'Herramientas',
      skills: ['Git', 'GitHub', 'Figma', 'WordPress', 'JHipster']
    }
  ] as const;
}
