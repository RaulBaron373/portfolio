import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly skillGroups = [
    {
      number: '01',
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'HTML', 'SCSS']
    },
    {
      number: '02',
      title: 'Backend',
      skills: ['Java', 'Spring Boot', 'REST API', 'JWT']
    },
    {
      number: '03',
      title: 'Bases de datos',
      skills: ['MySQL', 'SQL']
    },
    {
      number: '04',
      title: 'Herramientas',
      skills: ['Git', 'GitHub', 'Figma', 'WordPress', 'JHipster']
    }
  ] as const;
}
